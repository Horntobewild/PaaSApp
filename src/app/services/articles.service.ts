import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from "../models/article";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';


///this is only needed in case of POST request?
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})


export class ArticlesService {

  private perspectivesSubject = new BehaviorSubject<any>("keine");
  currentPerspectives = this.perspectivesSubject.asObservable();

  D2VApiUrl: string = 'http://127.0.0.1:12345/similar'
  CoeusApiUrl: string = 'http://127.0.0.1:8080/documents/text-query/'
  response:any;

  constructor(
    private http: HttpClient
  ) { }

//for FlaskD2VApi dummy
getArticles(query: any) {
  console.log("query received:" + query)
  this.http.get(this.D2VApiUrl, query).subscribe(
    arg => this.response = arg); 
  this.perspectivesSubject.next(this.response)
  }

//for Coeus API
getPerspectives(query: any) {
  console.log("Query received: "+query);
  this.http.post<any>(this.CoeusApiUrl, query, httpOptions).subscribe(
    arg => this.response = arg.perspectives);
  this.perspectivesSubject.next(this.response)
  console.log('these are the current perspectives: '+this.currentPerspectives)

}


clearPerspectives(){
  this.perspectivesSubject.next('keine');
}
    
dummyArticles:Article[]=[
  {
  id:1,
  title: "this is the first title",
  text: "this is the first text asdf this is the first text asdf this is the first text asdf",
  },{
  id:2,
  title: "this is the second title",
  text: "this is the second text asdf this is the second text asdf this is the second text asdf",
  },{
  id:3,
  title: "this is the third title",
  text: "this is the third text asdf this is the third text asdf this is the third text asdf",
  }
]
  
getDummies() {
//this.perspectivesSubject.next(this.dummyArticles);
}


}
