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
import { SelectComponent } from './select/select.component';
import { GuideComponent } from './guide/guide.component';
import { EndPageComponent } from './end-page/end-page.component';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    TextDetailComponent,
    CardDetailComponent,
    MovieDetailComponent,
    OtherLinkComponent,
    SurveyComponent,
    SelectComponent,
    GuideComponent,
    EndPageComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      // {
      //   path: 'contents/text',
      //   redirectTo: '/contents/text/:name',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'contents/card',
      //   redirectTo: '/contents/card/:name',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'contents/movie',
      //   redirectTo: '/contents/movie',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'contents/',
      //   redirectTo: '/contents/text/:name',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        redirectTo: '/contents/select',
        pathMatch: 'full'
      },
      {
        path: 'contents/text/:game/:gameKind',
        component: TextDetailComponent
      },
      {
        path: 'contents/card/:game/:gameKind',
        component: CardDetailComponent
      },
      {
        path: 'contents/movie/:game/:gameKind',
        component: MovieDetailComponent
      },
      {
        path: 'contents/text2/:game/:gameKind',
        component: TextDetailComponent
      },
      {
        path: 'contents/card2/:game/:gameKind',
        component: CardDetailComponent
      },
      {
        path: 'contents/movie2/:game/:gameKind',
        component: MovieDetailComponent
      },
      {
        path: 'contents/select/:game/:gameKind',
        component: SelectComponent
      },
      {
        path: 'contents/guide/:game/:gameKind',
        component: GuideComponent
      },
      {
        path: 'contents/endPage/:game/:gameKind',
        component: EndPageComponent
      },
    ])
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

