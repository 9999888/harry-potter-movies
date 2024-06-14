import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    { path: 'movies',component: MovieListComponent},
    {path: 'movies/:movieid',component: MovieComponent},
    {path: '**',redirectTo: 'movies'},
];




