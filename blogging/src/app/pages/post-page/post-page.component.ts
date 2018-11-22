import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../../services/get-post.service';
import { PostList } from '../../models/post-list';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  postList: PostList;
  constructor(private posts: GetPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts.getPosts().subscribe((result) => {
      this.postList = result;
      console.log(result);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
}
