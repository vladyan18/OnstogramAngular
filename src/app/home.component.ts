/**
 * Created by Владислав on 10.12.2017.
 */
import { Component, OnInit , OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  title = 'Test';
  posts : Post[] = [];

  constructor(private http: HttpClient)
  {

  }

  ngOnInit()
  {
    this.getPosts();
  }

  getPosts()
  {
    this.http.get("https://onstogram.azurewebsites.net/api/getLastImages?code=cEBAcEtwZu1eB1gprua9MswjxUcL04v4BDzV7L8HtCIOIQNvbs6YSg==")
      .subscribe((data) => {
        this.posts=<Post[]>data
      });
  }
}

