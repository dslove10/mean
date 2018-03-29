import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieNewComponent } from './movie-new/movie-new.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieHomeComponent,
    MovieShowComponent,
    MovieReviewComponent,
    MovieNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
