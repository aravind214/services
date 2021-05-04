import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
export class Movies{
  MovieName:string="";
  DirectorName:string="";
  MovieImageId:number=0;
  ReleasedDate:Date=new Date();
  Images:string="";
  
}
@Injectable({
  providedIn: 'root'
})
export class MovieHomeService {
  MoviesData:Movies=new Movies();

  constructor(private http: HttpClient) { }
  GetMovies(): Observable<any>{
    var data=this.http.get('https://localhost:44344/Movies');
    return data;
    
  }
}
