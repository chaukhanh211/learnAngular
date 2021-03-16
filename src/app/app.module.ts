import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieService } from './Services/movie/movie.service';
import { MessgaseComponent } from './components/messgase/messgase.component';
import { MessageService } from './Services/message/message.service';
import { RoutingMovieModule } from './routers/routing-movie/routing-movie.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessgaseComponent,
    DashboardComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingMovieModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
