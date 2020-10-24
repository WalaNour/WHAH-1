import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { LocalService } from "../local.service";
@Component({
  selector: "app-ban-users",
  templateUrl: "./ban-users.component.html",
  styleUrls: ["./ban-users.component.css"],
})
export class BanUsersComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private router: Router,
    private local: LocalService
  ) {}

  students: any;
  companies: any;
  trainingCenters: any;
  ngOnInit(): void {
    this._http.httpGetStudents().subscribe((data) => {
      console.log("this is students ===>", (this.students = data));
    });
    this._http.httpGetCompanies().subscribe((data) => {
      console.log("this is comopanies ===>", (this.companies = data));
    });
    this._http.httpGetTrainingCenter().subscribe((data) => {
      console.log("this is training ===>", (this.trainingCenters = data));
    });
  }

  reject(username) {
    console.log("hh");
  }
  banStudent(id) {
    console.log(id);
    var obj = {
      id: id,
    };
    this._http.httpbanstudent(obj).subscribe((data) => {
      console.log("done");
      this.ngOnInit();
    });
  }
  banCompany(id) {
    console.log(id);
    var obj = {
      id: id,
    };
    this._http.httpbancompany(obj).subscribe((data) => {
      console.log("done");
      this.ngOnInit();
    });
  }
  banCenter(id) {
    console.log(id);
    var obj = {
      id: id,
    };
    this._http.httpbancenter(obj).subscribe((data) => {
      console.log("done");
      this.ngOnInit();
    });
  }
  goback() {
    this.router.navigateByUrl("/admin/login");
  }
  ban() {
    this.router.navigateByUrl("/admin/ban");
  }
  verifications() {
    this.router.navigateByUrl("/admin");
  }
  membership() {
    this.router.navigateByUrl("/admin/update");
  }
}
