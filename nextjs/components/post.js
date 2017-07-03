import React from 'react';
import Link from 'next/link';

const Post = (props) => {
  return (
    <Link key={props.id} prefetch href={`post?id=${props.urlSlug}`}>

      <div className="item">
        <div className="ui tiny image">
          <img src={props.image} />
        </div>
        <div className="content">
          <div className="header">{props.title}</div>
          <div className="description">
            <p>{props.body.slice(0, props.limit ? props.limit : props.body.length)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
