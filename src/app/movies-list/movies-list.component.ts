import { Component, Inject, OnInit } from '@angular/core';
import { CinemaniaCartService } from '../cinemania-cart.service';
import { CinemaniaDataService } from '../cinemania-data.service';
import { Movie } from './Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[]= [];

  constructor( private cart: CinemaniaCartService, private moviesData: CinemaniaDataService) {
   }

  ngOnInit(): void {
    this.moviesData.getAll()
    .subscribe(movies => this.movies= movies);
  }

  addToCart(movie: Movie): void{
    this.cart.addToCart(movie);
    movie.tickets -= movie.quantity;
    movie.quantity = 0;

  }

  maxReached(m: string){
    alert(m);
  }

}
