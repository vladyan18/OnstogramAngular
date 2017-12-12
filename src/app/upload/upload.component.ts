/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, OnInit } from '@angular/core';
import { UploadPost }    from './uploadPost';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from "@angular/http";
import {AuthService} from "../auth/auth.service";

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

  constructor( private http: HttpClient, public auth: AuthService) {}

  ngOnInit(){
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  upload(value: any) {

    var Headers = new HttpHeaders();
    console.log(this.profile.sub);
    Headers.append('Accept', 'application/json');
    this.http.post('https://testvladyan18.azurewebsites.net/api/FileUploadNode/'+this.file['name']+'?code=0Gi5ReHCpiIaBz1pOHo1XWzIocyaJiHZZI0PSDhmhC28WXdJS7vsiw==',
      {
        "file": this.readerRes,
        "filename": this.file['name'],
        "text": value.text,
        "title": value.title,
        "sub": this.profile.sub
        },
    {
      headers: Headers
    }
      )
      .subscribe((data:any) => { console.log(data)})
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
