import { Component, OnInit } from '@angular/core';
import { ParserService } from 'src/app/services/parser.service';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  targetUrl:string
  parsedContent: any


  constructor(

    private parserService:ParserService

  ) { }

  ngOnInit(): void {
    this.parserService.currentParsedArticle.subscribe(
      arg => this.parsedContent = arg);
  }

  onSubmit(){
    this.parserService.parseArticle(this.targetUrl)
  }

  onClear(){
    this.targetUrl = null;
    this.parserService.clearResults();

  }
}
