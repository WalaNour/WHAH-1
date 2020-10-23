import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'


@Component({
  selector: 'app-posts-company-profile',
  templateUrl: './posts-company-profile.component.html',
  styleUrls: ['./posts-company-profile.component.css']
})
export class PostsCompanyProfileComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router , private local : LocalService) { }
  compPosts : any 
  ngOnInit(): void {
     this._http.findCompanyPosts(this.local.companyInfo).subscribe((data)=>{
       console.log(this.local.companyInfo)
       this.compPosts = data 
     })  
  }
  editPost(post){
   this.local.post = post
   this.router.navigateByUrl('updateCompPost')
  }
  //where owner = and created at =
  deletePost(id){
    var obj = {id}
    this._http.deleteCompanyPosts(obj).subscribe((data)=>{
      console.log('post removed')  
      this.ngOnInit()
    })
  }
  backToProfile(){
    this.router.navigateByUrl('company/profile')
  }
}
