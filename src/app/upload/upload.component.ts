/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, OnInit } from '@angular/core';
import { UploadPost }    from './uploadPost';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  model : UploadPost = new UploadPost('', '', '');
  file: File;
  readerRes: any;
  profile: any;
  idle: boolean;

  constructor( private http: HttpClient, public auth: AuthService, public router: Router) {
    this.idle = true;
  }

  ngOnInit(){
    this.idle = true;
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  upload(value: any) {
    this.idle = false;
    var Headers = new HttpHeaders();
    console.log(this.profile.sub);
    Headers.append('Accept', 'application/json');
    this.http.post('https://testvladyan18.azurewebsites.net/api/FileUploadNode/'+this.file['name']+'?code=0Gi5ReHCpiIaBz1pOHo1XWzIocyaJiHZZI0PSDhmhC28WXdJS7vsiw==',
      {
        "file": this.readerRes,
        "filename": this.file['name'],
        "text": value.Text,
        "title": value.Title,
        "sub": this.profile.sub
        },
    {
      headers: Headers
    }
      )
      .subscribe((data:any) => {
      if (data.status !== "200")
        this.router.navigate(['/error']);
      else
        this.router.navigate(['/']);
    }
      )
    }


  fileChangeEvent(fileInput: any) {
    this.file = fileInput.target.files[0];
    var reader = new FileReader();
    var self = this;

    reader.onloadend = function () {
    let headers = new Headers();
    console.log('sending file ');
    self.readerRes = this.result;
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
    reader.readAsDataURL(this.file);
  }
}
