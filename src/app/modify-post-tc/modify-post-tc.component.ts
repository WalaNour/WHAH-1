import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
@Component({
  selector: 'app-modify-post-tc',
  templateUrl: './modify-post-tc.component.html',
  styleUrls: ['./modify-post-tc.component.css'],
})
export class ModifyPostTcComponent implements OnInit {
  constructor(
    private local: LocalService,
    private _http: HttpService,
    private router: Router
  ) {}
  data: any;
  array: any = [];
  ngOnInit(): void {
    this.data = this.local.post;
    console.log('zzzzzz', this.data);
  }
  modify(obj1, obj2) {
    this.array = [obj1, obj2];
    this._http.update(this.array).subscribe((result) => {
      console.log(result);
      this.router.navigateByUrl('/own/posts');
    });
    // this._http.update(obj1,obj2).subscribe(result=>{
    //   console.log(result)
    // })
  }
}
