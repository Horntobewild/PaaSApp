import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-paas-results',
  templateUrl: './paas-results.component.html',
  styleUrls: ['./paas-results.component.css']
})
export class PaasResultsComponent implements OnInit {

  perspectives:any;

  constructor(
    private articleService:ArticlesService
  ) { }

  ngOnInit(): void {
    this.articleService.currentPerspectives.subscribe(
      arg => this.perspectives = arg);
  }

}
