/**
 * Created by Владислав on 11.12.2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { AuthService } from './../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DBRegisterService {


  constructor(public auth: AuthService, private http: HttpClient) {}

  profile: any;

  public regInDB() : void {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    this.http.post("https://onstogram.azurewebsites.net/api/addUser?code=La/tnEGZfKlJ58F9CmXcLOyJANrEiMFn39pIYS46ecSOMylA2MiR1Q==",this.profile)
      .subscribe((data:any) => {
      if (data.status != "200")
      {
        alert("Smthng with registering: " + data.status);
      }
    });

  }
}
