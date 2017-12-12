/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';


  @Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  @Input() post: Post;
  liked: boolean;
  constructor() {

  }

  ngOnInit()
  {
    this.liked = this.post.liked;
  }
}
