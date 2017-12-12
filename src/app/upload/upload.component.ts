/**
 * Created by Владислав on 12.12.2017.
 */
import { Component } from '@angular/core';
import { UploadPost }    from './uploadPost';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  model : UploadPost = new UploadPost('', '', '');
  file: File;
  readerRes: any;
  constructor( private http: HttpClient) {}

  upload(value: any) {
    const formData = new FormData();
    const uFile = this.file;

    formData.append("file", this.file);
    formData.append("filename", this.file['name']);

    var Headers = new HttpHeaders();

    Headers.append('Accept', 'application/json');
    this.http.post('https://testvladyan18.azurewebsites.net/api/FileUploadNode/'+this.file['name']+'?code=0Gi5ReHCpiIaBz1pOHo1XWzIocyaJiHZZI0PSDhmhC28WXdJS7vsiw==',
      {
        "file": this.readerRes,
        "filename": this.file['name']},
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
