/**
 * Created by Владислав on 11.12.2017.
 */
// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {

      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });

  }

}
