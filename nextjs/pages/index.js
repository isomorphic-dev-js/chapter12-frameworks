// ./pages/index.js

// Import React
import React from 'react';
import Head from 'next/head'
import 'isomorphic-fetch';
import PostList from '../components/post-list';
import Header from '../components/header';

// Export an anonymous arrow function
// which returns the template
const IndexPage = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css"
      />
    </Head>
    <Header />
    <div className="ui main text container offset" >
      <PostList posts={props.posts} />
    </div>

  </div>
)


IndexPage.getInitialProps = async ({ req }) => {
  let res, json;
  try {
    res = await fetch('http://localhost:3535/posts');
    json = await res.json()
  } catch (e) {
    console.log("e", e);
  }
  return { posts: json || [] }
}

export default IndexPage;
