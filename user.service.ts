import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import { User } from './user.model';
// import { map } from 'rxjs/operators';
//  import 'rxjs/add/operator/map';
// import { User } from './user.model';
export class registration{
  // UserId:number=0;
  UserName:string="";
  Password:string="";
  ConfirmPassword:string="";
  Email:string="";
  FirstName:string="";
  LastName:string="";

}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // registrationData:registration[]=[];
  // registrationmember:registration=new registration();
  // readonly rootUrl = 'https://localhost:44344/';
  constructor(private http: HttpClient) { }
  PostUserData(registrationData:registration): Observable<any>{
    var data=this.http.post('https://localhost:44344/Registration',registrationData);
    return data;
    
  }
  // registerUser(user : User){
  //   const body: User = {
  //     UserName: user.UserName,
  //     Password: user.Password,
  //     Email: user.Email,
  //     FirstName: user.FirstName,
  //     LastName: user.LastName
  //   }
  //   return this.http.post(this.rootUrl + '/api/User/Register', body);
  // }


}
