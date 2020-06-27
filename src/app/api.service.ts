import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private commentsUrl = 'https://cors-anywhere.herokuapp.com/http://cookbookrecipes.in/test.php';
  private newsUrl = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6cc609835e51458dab13e2f0808c55eb';


  constructor(private httpClient: HttpClient) { }

  getComments() {
    return this.httpClient.get(this.commentsUrl);
  }

  getNewsUpdates() {
    return this.httpClient.get(this.newsUrl);

  }
}
