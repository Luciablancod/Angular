import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movies-list/Movie';

@Injectable({
  providedIn: 'root'
})


/**
 * Maneja la logica del carrito
 */
export class CinemaniaCartService {

  // ticketsList: Movie[] = [];
 
  private _ticketsList: Movie[] = [];
  // ticketsList: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  ticketsList: BehaviorSubject<Movie[]> = new BehaviorSubject(this._ticketsList);

  constructor() { }

  addToCart(movie: Movie) {
    let item: Movie | undefined;
    item = this._ticketsList.find((vl) => vl.title == movie.title);
    if(!item){
      this._ticketsList.push({...movie});
    }else{
      item.quantity += movie.quantity;
    }
    /**
     * Emite un cambio
     */
    this.ticketsList.next(this._ticketsList);
    console.log(this._ticketsList);
  }
}
