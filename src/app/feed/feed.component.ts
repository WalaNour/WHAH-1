import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any; 
  constructor(private _http : HttpService , private local : LocalService , private router : Router) { }

  ngOnInit(): void {
    this._http.httpGetPosts().subscribe((data) => {
      console.log("data yohooo ===> ", data)
        this.posts = data 
    })
  }
  seeMore(post) {
    this.local.onePost = post; 
    this.router.navigateByUrl('/post');
  }

}
