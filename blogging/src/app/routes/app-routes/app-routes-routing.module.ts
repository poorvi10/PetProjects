import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from '../../pages/post-page/post-page.component';
import { PostDetailComponent } from '../../pages/post-detail/post-detail.component';
import { AddPostComponent } from '../../pages/add-post/add-post.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ProductsComponent } from '../../components/products/products.component';

const routes: Routes = [
  {path: '',component: ProductsComponent},
  {path:'post-detail/:postId', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // step one
  exports: [RouterModule]
})
export class AppRoutesRoutingModule { }
