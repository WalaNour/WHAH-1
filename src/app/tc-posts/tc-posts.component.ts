import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'
@Component({
  selector: 'app-tc-posts',
  templateUrl: './tc-posts.component.html',
  styleUrls: ['./tc-posts.component.css']
})
export class TcPostsComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router , private local : LocalService) { }
  userData : any ; 
  userPosts: any; 
  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.tcProfil(obj).subscribe((res)=>{
       this.userData = res[0]
       console.log("logoo ",this.userData)
       this.local.tsInfo = { owner: this.userData.owner, email: this.userData.email }
       var object = {owner : this.userData.owner}
       this._http.httpgetTcPosts(object).subscribe((res) => {
         console.log("this are your posts ", res)
         this.userPosts = res 
      })
     })
     

  }
  updateProfil(){
    this.router.navigateByUrl('/editTc')
  }


  searchProfil(profilName){
    this._http.findProfil({profilName}).subscribe((res)=>{
      this.local.otherProfile = res[0]
      this.router.navigateByUrl('/resultSearch')
    })
  };
  toPost() {
    this.router.navigateByUrl('/post/center')
  }
  about() {
    this.router.navigateByUrl('/center/profile')
  }
  handleClick(post){
    this.local.post = post 
    this.router.navigateByUrl('/modify/tc/posts')

  delete(id) {
    var obj = {
      id : id 
    }
    this._http.httpdeletePostTc(obj).subscribe((data) => {
      alert("post deleted :)")
      this.ngOnInit()
    })
  }
}
