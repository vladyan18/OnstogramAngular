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
  loading: boolean;
  constructor(private http: HttpClient)
  {
  this.loading = true;
  }

  ngOnInit()
  {
    this.loading = true;
    this.getPosts();
  }

  getPosts()
  {
    console.log("getting posts");
    this.http.get("https://testvladyan18.azurewebsites.net/api/getLastImages?code=B6WEKtMiKSczULcoNA5HrdUbMZtwx0I6oAs2GiXr8vvGO/KafQIMxA==")
      .subscribe((data) => {
        this.posts=<Post[]>data
        console.log(this.posts);
        this.loading = false;
      });
  }
}

