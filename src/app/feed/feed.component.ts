/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, Input } from '@angular/core';
import {Post} from '../post';

  @Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  @Input() post: Post;
  constructor() {

  }
}
