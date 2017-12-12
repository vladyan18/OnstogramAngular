/**
 * Created by Владислав on 12.12.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "../auth/auth.service";


  @Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  @Input() post: Post;
  @Input() profile: any;
  liked: boolean;
  comments: any[];

  constructor(private http: HttpClient, public auth: AuthService) {
  }

  public uploadComment(value: any)
  {

  }

  public like():void {
    if (this.auth.userProfile)
      this.profile = this.auth.userProfile;

    if (this.profile)
    {
    this.http.post("https://testvladyan18.azurewebsites.net/api/likeImage?code=hh83dn6rfFjgOvB5LSbkeUgSzsVosZBmf5AMYL2AOLDVZKmK/5IZww==",
      {
        "id": this.post.id,
        "sub": this.profile.sub
      },{
      headers: new HttpHeaders().set( 'Content-Type', 'application/json'),
    })
      this.liked = !this.liked;
    }
    else
    {
      this.http.post("https://testvladyan18.azurewebsites.net/api/likeImage?code=hh83dn6rfFjgOvB5LSbkeUgSzsVosZBmf5AMYL2AOLDVZKmK/5IZww==",
        {
          "id": this.post.id,
          "sub": "vkontakte|55245649"
        },{
          headers: new HttpHeaders().set( 'Content-Type', 'application/json'),
        })
      this.liked = !this.liked;
    }


  }

  ngOnInit() {


  }
}
