import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/MovieService';
import { Movie } from '../model/movie';
import { CommonModule } from '@angular/common';
import { MinutesToHourConverterPipe } from '../pipes/minutes-to-hour-converter.pipe';
import { DollarConverterPipe } from '../pipes/dollar-converter.pipe';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,
            MinutesToHourConverterPipe,
            DollarConverterPipe,
            SearchPipe,
            FormsModule,
            RouterLink,],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  errorMessage: String='';
  movieTitle: string = '';
  releaseYear: number | undefined;
       constructor(private movieService:MovieService){
       }  

       ngOnInit(){
        this.movieService.getMovieList().subscribe(
          (movies) => {
            console.log(movies);
            this.movieList = movies;
          },
          (err) => {
            console.log(err);
            this.errorMessage = err.error.error.message || err.message;
          }
        );
       }

}
