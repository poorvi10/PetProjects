import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
  { path: "profile/:id", 
    component: ProfileComponent,
    children: [{
      path: 'feeds', component: NewsFeedsComponent
    }]  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
