import { Component } from '@angular/core';
import { Post } from './post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  myPost: Post = {
    title: 'test',
    image: 'hi',
    id: 1,
    urlSlug: "test",
    body: "test"
  };
}
