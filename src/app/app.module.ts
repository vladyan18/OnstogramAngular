import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FeedComponent } from './feed/feed.component';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent }   from './login.component';
import { HomeComponent }   from './home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { DBRegisterService } from './auth/dbregister.service';
import { UploadComponent} from './upload/upload.component';
import { ErrorComponent} from './error/error.component';

import { AuthService } from './auth/auth.service';
import {FormsModule} from "@angular/forms";

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    PostComponent,
    HomeComponent,
    ProfileComponent,
    FeedComponent,
    UploadComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,DBRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
