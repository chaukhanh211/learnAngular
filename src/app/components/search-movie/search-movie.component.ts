import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import {
  debounceTime,distinctUntilChanged,switchMap
} from 'rxjs/operators';
import { Movie } from 'src/models/movie';
import { MovieService } from 'src/app/Services/movie/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  movies$: Observable<Movie[]>;

private searchedSubject = new Subject<string>();

constructor( private movieService : MovieService) { }

search(searchString : string) : void {
  console.log(`searchString =  ${searchString}`);
  this.searchedSubject.next(searchString);
}

ngOnInit(): void {
  this.movies$ =this.searchedSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(searchString => this.movieService.searchMovies(searchString))
  );

}

}
