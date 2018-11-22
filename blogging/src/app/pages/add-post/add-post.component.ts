import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetPostService } from '../../services/get-post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  response: Boolean;
  initial: Boolean = true;


  constructor(private fb: FormBuilder, private postService: GetPostService) { }

  ngOnInit() {
    this.addPostForm = this.fb.group({
      title: [null, Validators.required],
      body: [null, [Validators.required, Validators.minLength(30), Validators.maxLength(50)]]
    });
    
  }

  addPost($data) {
    this.postService.addPost($data).subscribe(
      (result) => {
        this.initial = false;
        this.response = true;
        console.log(result);
      }
    )
  }

}
