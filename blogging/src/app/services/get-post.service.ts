import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostList } from './../models/post-list';
import { IAddPost } from './../models/add-post';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetPostService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostList> {
   return this.http.get<PostList>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostDetails($id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + $id);
  }

  addPost(data): Observable<IAddPost> {
    return this.http.post<IAddPost>('https://jsonplaceholder.typicode.com/posts', data);
  }
}
