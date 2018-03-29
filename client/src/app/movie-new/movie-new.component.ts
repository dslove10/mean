import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  newMovie = {};
  errors;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newMovie = { title: '', reviews: []};
    this.errors = { title: '', reviews: []};
  }

  onSubmitCreate(event) {

    event.preventDefault();

    const observable = this._httpService.createMovie(this.newMovie);

    observable.subscribe(
      (res) => {
        console.log('New movie:', res);

        this._router.navigate(['/']);
      },

      (err) => {

        this.errors = err.error;
        console.log(this.errors);
      }
    );
  }

}
