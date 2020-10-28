import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-paas-query',
  templateUrl: './paas-query.component.html',
  styleUrls: ['./paas-query.component.css']
})
export class PaasQueryComponent implements OnInit {

  paasQuery:string;
  apiQuery:any;
  perspectives:any;

  constructor( 
    private articleService:ArticlesService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.apiQuery = JSON.stringify({"text" : this.paasQuery, "perspectivesLimit": 5});
    console.log("Search query is: "+ this.paasQuery)
    this.articleService.getPerspectives(this.apiQuery)
    //this.articleService.currentPerspectives.subscribe(arg => this.perspectives = arg);
    //console.log("these are the current perspectives: "+this.perspectives)
  }

  onClear(): void{
    this.paasQuery = null;
    this.articleService.clearPerspectives();
  }

}
