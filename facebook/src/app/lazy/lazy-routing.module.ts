import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyFeedsComponent } from './lazy-feeds/lazy-feeds.component';

const routes: Routes = [
  {path: "", component: LazyFeedsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
