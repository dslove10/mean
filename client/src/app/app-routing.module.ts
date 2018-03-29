import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieNewComponent } from './movie-new/movie-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MovieHomeComponent },
  { path: 'movies', component: MovieHomeComponent },
  { path: 'movies/new', component: MovieNewComponent },
  { path: 'movies/:id', component: MovieShowComponent },
  { path: 'movies/review/:id', component: MovieReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
