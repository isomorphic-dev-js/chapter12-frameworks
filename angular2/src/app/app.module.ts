import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { CommentsService } from './services/comments.service';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CommentComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PostListComponent
      },
      {
        path: 'post/:id',
        component: PostDetailComponent
      }
    ])
  ],
  providers: [
    CommentsService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
