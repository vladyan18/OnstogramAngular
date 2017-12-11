import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import {DBRegisterService} from './auth/dbregister.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tests';

  constructor(public auth: AuthService, private db: DBRegisterService) {
    auth.handleAuthentication();

  }

  testFunc(x:number, y:number) {
    return x + y;
  }
}
