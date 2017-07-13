// ./pages/post-with-comments.js

// Import React
import React from 'react';
import Head from 'next/head';
import url from 'url';
import Post from '../components/post';
import Header from '../components/header';
import Comment from '../components/comment';

// Export an anonymous arrow function
// which returns the template
const PostPage = (props) => {
  const comments = (comments) => {
    const commentsArray = [];
    comments.forEach((comment) => {
      commentsArray.push(
        <Comment key={comment.id} {...comment}/>
      )
    });
    return commentsArray;
  }
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
        />
      </Head>
      <Header />
      <div className="ui main text container offset">
        <div className="ui segment items">
          <Post {...props.post} />
        </div>
        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          { comments(props.comments) }
        </div>
      </div>
    </div>
  )
}

PostPage.getInitialProps = async ({ req, query }) => {

  let id;
  if(req) {
    id = url.parse(req.url, true).query.id;
  } else {
    id = query.id;
  }

  const resPost = await fetch(`http://localhost:3535/post/${id}`);
  const post = await resPost.json()

  const resComments = await fetch(`http://localhost:3535/post/${post.id}/comments`);
  const comments = await resComments.json()

  return {
    post: post,
    comments: comments
  }
}

export default PostPage;
