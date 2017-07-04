import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  subscription;
  posts: Array<Post>;

  constructor(private postsService: PostsService) {
    this.posts = [];
  }



  ngOnInit() {
    const postsSub: Observable<any> = this.postsService.getPosts();
    this.subscription = postsSub.subscribe((posts) => {
        this.posts = posts;
        console.log("posts", this.posts);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
