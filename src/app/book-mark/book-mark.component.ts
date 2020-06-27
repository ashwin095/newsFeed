import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-mark',
  templateUrl: './book-mark.component.html',
  styleUrls: ['./book-mark.component.css']
})
export class BookMarkComponent implements OnInit {

  bookMarkedArticles: any = []
  constructor() { }

  ngOnInit(): void {
    this.getBookMarks();
  }
  getBookMarks() {
    let data = localStorage.getItem('bookmark');
    if (data)
      this.bookMarkedArticles = JSON.parse(data)
    console.log(this.bookMarkedArticles)
  }

}
