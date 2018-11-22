import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../../services/get-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post;
  constructor(private postService: GetPostService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.getPostDetail();
  }

  getPostDetail() {
    const postId = this._router.snapshot.params.postId;
    this.postService.getPostDetails(postId).subscribe((result)=>{
      console.log(result);
      this.post=result;
    },
  err => console.log(err)  );

  }

}
