/**
 * Created by Владислав on 11.12.2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from "@angular/http";

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'z2WVQFVU97HDAtz3apb4f8yiepSh0h36',
    domain: 'vladyan18.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vladyan18.eu.auth0.com/userinfo',
    redirectUri: 'https://onstogramm.azurewebsites.net/login',
    scope: 'openid profile'
  });

  constructor(public router: Router, private http: HttpClient) {}

  userProfile: any;

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);

        this.getProfile((err, profile) => { this.router.navigate(['/']);
        });

        console.log("Sending post");
        this.http.post("https://testvladyan18.azurewebsites.net/api/addUser?code=B6WEKtMiKSczULcoNA5HrdUbMZtwx0I6oAs2GiXr8vvGO/KafQIMxA==",this.userProfile,{
          headers: new HttpHeaders().set('withCredentials', 'true'),
        })
          .subscribe((data:any) => {
            console.log(data);
            if ((data.status != "200") && (data.status != "201"))
            {
              this.logout();
              throw new Error("Smthng with registering: " + data.status);
            }
          });
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time


    if (localStorage.getItem('expires_at') !== undefined) {
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      var b:boolean = new Date().getTime() < expiresAt;
      return new Date().getTime() < expiresAt;
    } else {
      return false;
    }
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}
