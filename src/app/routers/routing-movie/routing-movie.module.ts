import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import {Movie} from 'src/models/movie';
// import { CommonModule } from '@angular/common';


//set link Router
const router: Routes = [
  { path: '',redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: MovieDetailComponent},
];

@NgModule({
  // declarations: [],
  imports: [
    //set router movies fist run
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class RoutingMovieModule { }
