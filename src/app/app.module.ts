import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { BookMarkComponent } from './book-mark/book-mark.component';





@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    HeaderComponent,
    FooterComponent,
    NewsCardComponent,
    DateAgoPipe,
    BookMarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
