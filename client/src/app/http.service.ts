import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

   }

  getMovies() {
    return this._http.get('/movies');
  }

  createMovie(newMovie) {
    return this._http.post('/movies', newMovie);
  }

  createReview(newMovie) {
    return this._http.post('/movies/new/' + newMovie._id, newMovie.reviews);
  }

  getOneMovie(id) {
    return this._http.get('/movies/' + id);
  }

  destroyMovie(id) {
    return this._http.delete('/movies/' + id);
  }

}
