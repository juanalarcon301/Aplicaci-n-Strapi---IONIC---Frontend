import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
id?: string;
title: string;
descripcion: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  API = 'http://localhost:1337/posts'

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(this.API)
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/${id}`);
  }

  createPost(title: string, descripcion: string) {
    return this.http.post(this.API, {
     title,descripcion
    })
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/${id}`,post)
  }

  deletePost(id: string) {
    return this.http.delete(`${this.API}/${id}`)
  } 

}
