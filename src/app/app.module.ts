import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CinemaniaAboutComponent } from './cinemania-about/cinemania-about.component';
import { CinemaniaMoviesComponent } from './cinemania-movies/cinemania-movies.component';
import { CinemaniaCartComponent } from './cinemania-cart/cinemania-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { CinemaniaIndexComponent } from './cinemania-index/cinemania-index.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CinemaniaAboutComponent,
    CinemaniaMoviesComponent,
    CinemaniaCartComponent,
    InputNumberComponent,
    CinemaniaIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }