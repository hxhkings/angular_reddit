import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];

	constructor() {
		this.articles = [
  		new Article('Software Apps Portfolio', 'http://hxhking.000webhostapp.com', 3),
  		new Article('Github Account', 'https://github.com/hxhkings', 2),
  		new Article('Artwork Portfolio', 'http://www.touchtalent.com/artist/93352/ronie-horca', 1)
  		];
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
	 	console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	 	this.articles.push(new Article(title.value, link.value, 0));
	 	title.value = '';
	 	link.value = '';
	  	return false;
	}

	sortedArticles(): Article[] {
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
}