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
  @Input() Nickname:string = "Someone";
  @Input() Url:string = "http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52d09387ae003_1.JPG";
  Text:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper et.";
  Title:string = "Summary";
  @Input() post: Post;
  constructor() {

  }
}
