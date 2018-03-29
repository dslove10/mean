import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {

  reviews = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      const observable = this._httpService.getOneMovie(id);
      observable.subscribe(data => {
        console.log(data['reviews']);
        this.reviews = data;
      });
    });
  }

  deleteMovie(id) {
    const observable = this._httpService.destroyMovie(id);

    observable.subscribe((res) => {
      this._router.navigate(['/']);
    });
  }

}
