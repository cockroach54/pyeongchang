import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //for ngModel
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { DisqusModule } from "ngx-disqus";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextNewsComponent } from './textNews/textNews.component';
import { CardNewsComponent } from './cardNews/cardNews.component';
import { MovieNewsComponent } from './movieNews/movieNews.component';
import { DisqusTextComponent } from './disqus-text.component';
import { DisqusCardComponent } from './disqus-card.component';
import { DisqusMovieComponent } from './disqus-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TextNewsComponent,
    CardNewsComponent,
    MovieNewsComponent,
    DisqusTextComponent,
    DisqusCardComponent,
    DisqusMovieComponent,
  ],
  imports: [
    DisqusModule.forRoot('pyeongchang'),
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'textNews',
        redirectTo: '/textNews',
        pathMatch: 'full'
      },
      {
        path: 'cardNews',
        redirectTo: '/cardNews',
        pathMatch: 'full'
      },
      {
        path: 'movieNews',
        redirectTo: '/movieNews',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'textNews',
        component: TextNewsComponent
      },
      {
        path: 'cardNews',
        component: CardNewsComponent
      },
      {
        path: 'movieNews',
        component: MovieNewsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
