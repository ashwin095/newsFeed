import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  bookmarks: any = [];

  constructor(private service: ApiService) { }


  articles: any = []

  URL: string = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6cc609835e51458dab13e2f0808c55eb';

  ngOnInit() {
    this.getBookMarks();
    this.getData();
  }

  getData() {
    var myInst = this;
    console.log("fetch some JSON data");
    fetch(this.URL)
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(article => {
          if (myInst.articles.length < 30)
            myInst.articles.push(article)
        });
        console.log(myInst.articles)
      });
  }


  onScrollDown() {
    if (this.articles.length < 30)
      this.getData();
  }

  getBookMarks() {
    this.bookmarks = []
    let data = localStorage.getItem('bookmark');
    if (data)
      this.bookmarks = JSON.parse(data);
  }

}
