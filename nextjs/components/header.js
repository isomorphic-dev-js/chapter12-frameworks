import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="ui borderless main menu">
      <div className="ui text container">
        <div className="header item">
          <img className="logo" src="http://placehold.it/64x64" />
          <span style={{paddingLeft: "1rem"}}>Sample Blog</span>
        </div>
        <Link prefetch href="/">
          <a className="item">Posts</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
