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


  parseArticle(url:string){
    const params = new HttpParams({ fromObject: { token: this.diffbotToken, url: url}});
    this.http.get(this.getAdress, {params}).subscribe(
      arg => this.parserSubject.next(arg['objects'][0])
    );
  }

  // parseArticle(url:string){
  //   const params = new HttpParams()
  //     .set('token', this.diffbotToken)
  //     .set('url', url)
  //   const getRequest = `${this.getAdress}?${params.toString}`;
  //   console.log('querey received to: ', getRequest)
  //   this.http.get(getRequest).subscribe(
  //     arg => console.log(arg)
  //   )
  // }

  // parseArticle(url:string){
    
  //   this.http.get((this.getAdress+"?token="+this.diffbotToken+"?url="+url).toString()).subscribe(
  //     arg => console.log(arg)
  //   )
  // }

  clearResults(){
    this.parserSubject.next('no results')
  }
}
