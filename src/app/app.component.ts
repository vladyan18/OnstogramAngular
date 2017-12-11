import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tests';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  testFunc(x:number, y:number) {
    return x + y;
  }
}
