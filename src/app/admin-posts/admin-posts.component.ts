import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private _http : HttpService , private local : LocalService , private router : Router) { }
  posts: any; 
  deletePost: any; 
  ngOnInit(): void {
    this._http.httpGetPosts().subscribe((data) => {
        this.posts = data 
    })
  }
  seeMore(post) {
    console.log(post.id)
    this.deletePost = post.id; 
    var obj = { id : post.id}
    this._http.httpdeletePost(obj).subscribe((data) => {
      this.ngOnInit()
      alert("deleted :) ")
    })
  }
}
