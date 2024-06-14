import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../model/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/MovieService';
import { MinutesToHourConverterPipe } from '../pipes/minutes-to-hour-converter.pipe';
import { DollarConverterPipe } from '../pipes/dollar-converter.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MinutesToHourConverterPipe,
            DollarConverterPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movieId:string='';
  errorMessage:string='';
  movieDetails:MovieDetails={  
    id:'',
    title:'',
    duration:'',
    budget:'',
    release_date:'',
    box_office:'',
    cinematographers:[],
    poster:'',
    producers: [],
    summary:''
  };
  constructor(private movieService:MovieService,
              private route:ActivatedRoute,
              private router:Router
  ){
  }
  ngOnInit(){
      console.log(this.route.params);
      this.route.params.subscribe((params) => {
        this.movieId = params['movieid'];
      });

     
      this.movieService.getMovieById(this.movieId).subscribe(movieDetails=>this.movieDetails=movieDetails,error=>this.errorMessage = error.error.error.message || error.message);
      }
    


  backToHome(){
        this.router.navigate(['/movies']);
      }
   
  }




