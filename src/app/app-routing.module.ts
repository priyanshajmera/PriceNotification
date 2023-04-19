import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  { path:'' , component: HomeComponent },
  { path:'Home',component: HomeComponent},
  { path:'Watchlist',component: WatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
