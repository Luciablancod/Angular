import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaniaAboutComponent } from './cinemania-about/cinemania-about.component';
import { CinemaniaCartComponent } from './cinemania-cart/cinemania-cart.component';
import { CinemaniaIndexComponent } from './cinemania-index/cinemania-index.component';
import { CinemaniaMoviesComponent } from './cinemania-movies/cinemania-movies.component';

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'movies', component: CinemaniaMoviesComponent},
  {path:'about', component: CinemaniaAboutComponent},
  {path:'cart', component: CinemaniaCartComponent},
  {path:'index', component: CinemaniaIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
