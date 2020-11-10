import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ParserService {

  private parserSubject = new BehaviorSubject<any>('no content parsed yet');
  currentParsedArticle = this.parserSubject.asObservable();


  diffbotToken:string = "42df55145e1270c1462a2f994e009c6a"
  getAdress:string = "https://api.diffbot.com/v3/article"
  response:any

  constructor(

    private http: HttpClient

  ) { }

  
  parseARticle(url:string){
    const params = new HttpParams({ fromObject: { token: this.diffbotToken, url}});
    this.http.get(this.getAdress, {params});
  }


  clearResults(){
    this.parserSubject.next('no results')
  }
}
