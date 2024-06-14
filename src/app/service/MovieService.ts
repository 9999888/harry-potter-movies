import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Movie, MovieDetails } from '../model/movie';

@Injectable({
    providedIn:'root',
})
export class MovieService{
  constructor(private http:HttpClient){
  }
  errorHandler(error:Error){
    return throwError(error);
  }
  
  
  getMovieList():Observable<Movie[]>{
    return this.http.get<Movie[]>('/movies').pipe(catchError(error => this.errorHandler(error)));
  }

  getMovieById(movieId:string):Observable<MovieDetails>{
      return this.http.get<MovieDetails>('movies/'+movieId).pipe(catchError(error=>this.errorHandler(error)));

    }
}


