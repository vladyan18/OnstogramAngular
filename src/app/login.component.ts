/**
 * Created by Владислав on 10.12.2017.
 */
import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-app',
  template: `<h3>{{id}}</h3>`
})
export class LoginComponent implements OnInit, OnDestroy{
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
