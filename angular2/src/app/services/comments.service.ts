import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const service = 'http://localhost:3535'

@Injectable()
export class CommentsService {

  constructor(private http: Http) {}

  getCommentsForPost(postId): any {
    return this.http.get(`${service}/post/${postId}/comments`);
  }
}
