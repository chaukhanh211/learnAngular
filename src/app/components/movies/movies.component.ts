/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Movies Component
*/
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie';
// import { fakeMovies } from '../fake-movies';
import { MovieService } from '../../Services/movie/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) {

  }
  getMoviesFromServices(): void {
    this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies);
  }
  ngOnInit() {
    this.getMoviesFromServices();
  }

  add(name: string , releaseYear: string):void {
    name = name.trim();
    if(Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) ==0){
      alert(`Name must not be blank, Realease year must be a number`);
      return;
    }
    const newMovie: Movie = new Movie();
    newMovie.name = name;
    newMovie.releaseYear = Number(releaseYear);
    this.movieService.addMovie(newMovie).subscribe(insertMovie => {
      this.movies.push(insertMovie);
    });


  }
  delete (movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe( _ => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id != movieId);
    }
  );
  }

}
