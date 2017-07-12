import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { Comment } from '../comment';
import { Observable } from 'rxjs/Observable';
import { PostsService } from '../services/posts.service';
import { CommentsService } from '../services/comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  postSubscription;
  commentSubscription;
  routeSubscription;
  post: Post;
  comments: Array<Comment>;
  constructor(private commentsService: CommentsService,
              private postsService: PostsService,
              private route: ActivatedRoute) {
    this.comments = [];
    this.post = new Post();
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const postsSub: Observable<any> = this.postsService.getPostByUrlSlug(params.id);
      this.postSubscription = postsSub.subscribe((post) => {
        this.post = post;
        console.log("post", this.post)
        const commentsSub: Observable<any> = this.commentsService.getCommentsForPost(this.post.id);
        this.commentSubscription = commentsSub.subscribe((comments) => {
            this.comments = comments;
            console.log("post", this.comments);
          }
        );
      });
    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
    this.commentSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

}
