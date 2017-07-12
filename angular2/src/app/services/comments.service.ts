import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

const service = 'http://localhost:3535'

@Injectable()
export class CommentsService {

  constructor(private http: TransferHttp) {}

  getCommentsForPost(postId): any {
    return this.http.get(`${service}/post/${postId}/comments`);
  }
}
