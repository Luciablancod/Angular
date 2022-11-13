import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from './movies-list/Movie';


/**
 * Crear mi api
 */
const URL = "https://636fa782bb9cf402c81c858e.mockapi.io/cinemania/movies"

@Injectable({
  providedIn: 'root'
})
export class CinemaniaDataService {

  constructor( private http: HttpClient) { }

  getAll(): Observable<Movie[]>{
    return this.http.get<Movie[]>(URL);
    // return this.http.get<Movie[]>(URL).pipe(tap(movies: Movie[]) => movies.forEach(movie.quantity = 0));
    // return this.http.get<Movie[]>(URL).pipe(tap(movies: Movie[]) => console.log(movies));

  }
}
