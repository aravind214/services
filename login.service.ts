import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
export class login{
  UserId:number=0;
  UserName:string="";
  Password:string="";
 

} 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
 
  logindata1:login= new login();
  GetUserData(): Observable<any>{
    var memory=this.http.get('https://localhost:44344/login');
    return memory;
    
    
  }
  
}
