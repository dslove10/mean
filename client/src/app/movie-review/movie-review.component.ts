import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

  movie = {};
  newReview = {};
  errors;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newReview = { name: '', content: ''};
    this.errors = { name: '', content: ''};
    this.getMovie();
  }

  getMovie() {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      const observable = this._httpService.getOneMovie(id);
      observable.subscribe(data => {
        console.log(data);
        this.movie = data;
      });
    });
  }

  onSubmitCreate(event) {
    event.preventDefault();

    const observable = this._httpService.createReview(this.movie);

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
