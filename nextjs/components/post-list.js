import React from 'react';
import Link from 'next/link';
import Post from './post';

const PostList = (props) => {
  let { posts } = props;

  let buildPosts = (posts) => {
    const postsArray = [];
    posts.forEach((post) => {
      postsArray.push(
        <Post {...post} limit="250" />
      )
    });
    return postsArray;
  }
  return (
    <div className="ui link items">
      { buildPosts(posts)}
    </div>
  )
}

export default PostList;
