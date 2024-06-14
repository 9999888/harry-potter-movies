import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(
    value: Movie[],
    title: string,
    releaseYear: number | undefined
  ): Movie[] {
    //if filters are empty
    if (
      (title == '' || title == undefined || !title) &&
      (!releaseYear || releaseYear === undefined || releaseYear === null)
    ) {
      return value;
    }

    const movieList = [...value];
    let filteredValue: Movie[] = [];

    //Both Title and Release_year present
    if (title && releaseYear) {
      filteredValue = movieList.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          movie.release_date.includes(String(releaseYear))
        );
      });
      return filteredValue;
    }

    if (title) {
      filteredValue = movieList.filter(movie => {
        return movie.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    if (releaseYear) {
      filteredValue = movieList.filter(movie => {
        return movie.release_date.includes(String(releaseYear));
      });
    }
    return filteredValue;
  
  }
}

