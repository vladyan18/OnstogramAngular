/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../feed/feed.component.css']
})
export class CommentComponent implements OnInit{
  @Input() comment: any;

  constructor(private http: HttpClient, public auth: AuthService) {
  }

  ngOnInit() {


  }
}
