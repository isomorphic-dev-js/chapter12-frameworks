import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

const service = 'http://localhost:3535'

@Injectable()
export class PostsService {

  constructor(private http: TransferHttp) {}

  getPosts(): any {
    return this.http.get(`${service}/posts`);
  }

  getPostByUrlSlug(urlSlug): any {
    return this.http.get(`${service}/post/${urlSlug}`);
  }
}
