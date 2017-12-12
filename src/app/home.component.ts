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
    console.log("getting posts");
    this.http.get("https://onstogram.azurewebsites.net/api/getLastImages?code=IaiNXuqa5OExuu2H4e0ry/h58SbG4E9ZXg9VvBNlhCf023HNXUvo8Q==")
      .subscribe((data) => {
        this.posts=<Post[]>data
        console.log(this.posts);
      });
  }
}

