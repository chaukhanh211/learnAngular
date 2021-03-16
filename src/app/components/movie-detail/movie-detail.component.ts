/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Movie's Detail Component
*/
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';

//router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../../Services/movie/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor (
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRouter();
  }
  getMovieFromRouter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log( `this.route.snapshot.paramMap =
        ${JSON.stringify(this.route.snapshot.paramMap.get('id'))}`);
    // call service MovieServiceId
    this.movieService.getMovieFromId(id).subscribe(data => this.movie = data);
  }
  save(): void {
    this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
