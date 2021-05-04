import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Review{
  MoviewReviewName:string="";
  MovieId:number=1;
  MovieRating:number=4;
  Username:string="";
  Feedback:string="";
  // MovieImageId:string="";
}
@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

  constructor(private http: HttpClient) { }
  PostUserData(ReviewData:Review): Observable<any>{
    var data=this.http.post('https://localhost:44344/MoviesReview',ReviewData);
    return data;
}
}
