/**
 * Created by Владислав on 12.12.2017.
 */
import { Component } from '@angular/core';
import { UploadPost }    from './uploadPost';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  model : UploadPost = new UploadPost('', '', '');
  file: File;

  constructor( private http: HttpClient) {}

  upload(value: any) {
    const formData: any = new FormData();

    formData.append("upload", this.file );

    console.log(value)
    console.log(formData)
    //this.http.post('http://localhost:3001/upload', formData)
     // .subscribe(file => console.log(file))
  }

  fileChangeEvent(fileInput: any) {
    this.file = fileInput.target.files[0];
  }
}
