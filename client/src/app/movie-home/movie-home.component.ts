import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  movies;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const observable = this._httpService.getMovies();

    observable.subscribe((res) => {
      console.log(res);

      this.movies = res;
    });
  }

}
