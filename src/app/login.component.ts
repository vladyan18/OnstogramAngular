/**
 * Created by Владислав on 10.12.2017.
 */
import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  id: number;
  code: string;

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.code = queryParam['code'];
      });
  }

  ngOnInit() {

  }


  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
