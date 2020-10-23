import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  message: any; 
  otherProfile: any;
  onePost: any; 
  companyInfo : any = {};
  tsInfo : any = {}
  post : any 
  constructor() { }

}
