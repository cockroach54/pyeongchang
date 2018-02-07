import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms'; //for ngModel
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TextDetailComponent } from './text-detail/text-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { OtherLinkComponent } from './other-link/other-link.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    TextDetailComponent,
    CardDetailComponent,
    MovieDetailComponent,
    OtherLinkComponent,
    SurveyComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'contents/text',
        redirectTo: '/contents/text',
        pathMatch: 'full'
      },
      {
        path: 'contents/card',
        redirectTo: '/contents/card',
        pathMatch: 'full'
      },
      {
        path: 'contents/movie',
        redirectTo: '/contents/movie',
        pathMatch: 'full'
      },
      {
        path: 'contents/',
        redirectTo: '/contents/text',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/contents/text',
        pathMatch: 'full'
      },
      {
        path: 'contents/text',
        component: TextDetailComponent
      },
      {
        path: 'contents/card',
        component: CardDetailComponent
      },
      {
        path: 'contents/movie',
        component: MovieDetailComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

