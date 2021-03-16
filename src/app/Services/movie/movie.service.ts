/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Services could get data from server, create fake data, get data from local storage
*/
import { Injectable } from '@angular/core';
import { fakeMovies } from '../../fake-movies';
import { Movie } from '../../../models/movie';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

//MessageService
import { MessageService } from '../../Services/message/message.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({'Conten-Type':'application/json'})
};
@Injectable()
export class MovieService {

    private movieURL ='http://localhost:3000/movies';
    getMovies(): Observable<Movie[]> {
    // this.messageService.addMessage(`${ new Date().toLocaleString() } . Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.movieURL).pipe(
      tap(receivedMovies => console.log(`ReceivedMovies = ${JSON.stringify(receivedMovies)}`)),
      catchError(err => of([]) )
    );
  }

  getMovieFromId(id: number) : Observable<Movie>{
    // return of(fakeMovies.find(movie => movie.id = id));
    const url = `${this.movieURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`selectedMovied = ${JSON.stringify(selectedMovie)}`)),
      catchError(err =>of(new Movie()))
    );
  }

  updateMovie(movie : Movie) :Observable<any> {

    return this.http.put(`${this.movieURL}/${movie.id}`, movie , httpOptions).pipe(
      tap(updateMovie => console.log(`updateMovie = ${JSON.stringify(updateMovie)}`)),
      catchError(err =>of(new Movie()))
    );
  }

  addMovie(newMovie : Movie) :Observable<Movie> {
    return this.http.post<Movie>(this.movieURL,newMovie,httpOptions).pipe(
      tap(movie => console.log(`insertMovie = ${JSON.stringify(movie)}`)),
      catchError(err =>of(new Movie()))
    );
  }

  deleteMovie(movieId : Number) :Observable<Movie> {
    const url = `${this.movieURL}/${movieId}`;
    return this.http.delete<Movie>(url,httpOptions).pipe(
      tap(_=> console.log(`deleteMovie = ${movieId}`)),
      catchError(err => of(null))
    );
  }

  searchMovies(typeString: string): Observable<Movie[]> {
    if(!typeString.trim()){
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.movieURL}?name_like=${typeString}`).pipe(
      tap(foundMovides => console.log(`foundMovides = ${JSON.stringify(foundMovides)}`)),
      catchError(err => of(null))
    );
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService
    ) { }

}
