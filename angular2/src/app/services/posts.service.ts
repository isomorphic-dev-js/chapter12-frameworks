import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const service = 'http://localhost:3535'

@Injectable()
export class PostsService {

  constructor(private http: Http) {}

  getPosts(): any {
    return this.http.get(`${service}/posts`);
  }

  getPostByUrlSlug(urlSlug): any {
    return this.http.get(`${service}/post/${urlSlug}`);
  }
}
