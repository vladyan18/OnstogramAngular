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
  Text:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper et.";
  Title:string = "Summary";
  @Input() post: Post;
  constructor() {

  }
}
