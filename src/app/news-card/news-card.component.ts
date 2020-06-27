import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  author: any;
  description: any;
  showDescription: boolean = false;
  showComments: boolean = false;

  bookmarked: boolean = false;

  sourceName: any;
  publishedAt: any;

  constructor(private service: ApiService) { }

  articleData: any = {}
  newsImage: string = null;
  comments: any = [];

  requiredComments: any = []

  @Input('article')
  set article(data) {
    this.articleData = data;
    this.updateArticle()
  }

  @Input() bookmarks: any

  ngOnInit() {
    this.getcomments();
  }

  getcomments() {
    this.service.getComments()
      .subscribe(response => {
        this.comments = response;
        this.requiredComments = this.comments.slice(0, 2);
       // console.log('service', response)
      });
  }

  updateArticle() {
    this.newsImage = this.articleData.urlToImage;
    this.author = this.articleData.author && !this.articleData.author.includes("<a href=") ? this.articleData.author : 'Author';
    this.sourceName = this.articleData.source.name;
    this.description = this.articleData.description;
    this.publishedAt = this.articleData.publishedAt;
    this.validateBookMark()
  }

  addBookMark() {
    if (!this.bookmarked) {
      this.bookmarked = true
      this.bookmarks.push(this.articleData)
      localStorage.setItem('bookmark', JSON.stringify(this.bookmarks));
    }
  }

  validateBookMark() {
    if (this.bookmarks) {
      var index = this.bookmarks.findIndex(x => x.source.name == this.articleData.source.name)
      if (index != -1) {
        this.bookmarked = true;
      }
    }
  }

  showfullDescription() {
    this.showDescription = true
  }

}
