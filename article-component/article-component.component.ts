import { Component, OnInit } from '@angular/core';
import {Article} from "../Core/model/article";
import {articles} from "../Core/model/articles";

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {
  listeArticle!:Article[];
  listeArticle2!:Article[];
  cat!: string;
  cat2!: string;
  x!: string;
  constructor() { }

  ngOnInit(): void {
    this.listeArticle=articles;
    this.listeArticle2=articles;
    this.x=this.listeArticle.filter((article)=>article.categorie!="Travail").length.toString();
    this.cat="Travail";
    this.cat2="Education";

  }
filterarticle(){
    this.listeArticle=this.listeArticle2.slice(0,Number(this.x));
}
}
