import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  encapsulation: ViewEncapsulation.None // can take and give styles to other components also.
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
