import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';


import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { AppRoutesModule } from './routes/app-routes/app-routes.module';
import { GetPostService } from './services/get-post.service';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostComponent } from './services/post/post.component';
import { DefaultImagePipePipe } from './pipes/default-image-pipe.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HoverDirective } from './directives/hover.directive';
import { HomeComponent } from './pages/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PaymentDirective } from './directives/payment.directive';
import { ProductsComponent } from './components/products/products.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostPageComponent,
    PostDetailComponent,
    AddPostComponent,
    PostComponent,
    DefaultImagePipePipe,
    NavbarComponent,
    HoverDirective,
    HomeComponent,
    CreatePostComponent,
    PaymentDirective,
    ProductsComponent,
    DynamicFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    RouterModule,
    HttpClientModule, 
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  providers: [GetPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
