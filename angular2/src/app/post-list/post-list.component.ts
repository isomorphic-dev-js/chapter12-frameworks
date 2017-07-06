import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

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
