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
  constructor() {

  }

  ngOnInit() {
  }



  ngOnDestroy() {
  }
}

