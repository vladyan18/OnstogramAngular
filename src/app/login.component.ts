/**
 * Created by Владислав on 10.12.2017.
 */
import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';

export class User{
  access_token: string = '0';
  user_id: string = '0';
}

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  id: number;
  code: string;
  user: any;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.code = queryParam['code'];

      });
  }

  ngOnInit() {
    this.http.get('https://onstogram.azurewebsites.net/api/loginVK?code=Afw1JWaKzGpSOvygt1KMi/Y1j2lT0tqIskexFnd5nSUtV2Q9ktG/xw==&vcode=' + this.code)
      .subscribe((data) => {
      this.user=data
       });
  }


  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}

