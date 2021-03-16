import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
import { MovieService } from '../../Services/movie/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor( private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
     this.movieService.getMovies().subscribe(data => this.movies = data.slice(1,5));
  }

}
