import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.userImage} />
      </a>
      <div className="content">
        <h4 className="title">
          {props.title}
        </h4>
        <div className="text">
          {props.message}
        </div>
        <div className="metadata" style={{marginLeft: 0}}>
          <div>User: {props.user}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
