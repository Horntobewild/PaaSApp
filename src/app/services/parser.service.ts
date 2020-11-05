import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ParserService {

  private parserSubject = new BehaviorSubject<any>('no content parsed yet');
  currentParsedArticle = this.parserSubject.asObservable();

  diffbotToken:string = "42df55145e1270c1462a2f994e009c6a"
  getAdress:string = "https://api.diffbot.com/v3/article?"
  response:any

  constructor(

    private http: HttpClient

  ) { }


  parseArticle(url:string) {
    console.log("query received to: ",url)
    this.http.get(this.getAdress+"token="+this.diffbotToken+"&url="+url).subscribe(
      arg => this.parserSubject.next(arg['objects'][0])
      )
    }


  clearResults(){
    this.parserSubject.next('no results')
  }
}
