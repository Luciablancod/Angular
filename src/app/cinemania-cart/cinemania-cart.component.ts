import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaniaCartService } from '../cinemania-cart.service';
import { Movie } from '../movies-list/Movie';

@Component({
  selector: 'app-cinemania-cart',
  templateUrl: './cinemania-cart.component.html',
  styleUrls: ['./cinemania-cart.component.scss']
})
export class CinemaniaCartComponent implements OnInit {

  ticketsList$: Observable<Movie[]>;

  constructor( private cart: CinemaniaCartService) { 
   this.ticketsList$ = cart.ticketsList.asObservable();
    // cart.ticketsList.subscribe(c => this.ticketsList = c);
   }

  ngOnInit(): void {
  }

}
