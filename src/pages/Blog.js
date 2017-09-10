import React from 'react';
import TitleBar from '../TitleBar';
import PostList from '../PostList';

const testPost = {
  title: 'Title',
  content: 'Some <em>HTML</em> content',
  author: 'Author'
}
class Blog extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="blog-page">
        <TitleBar text="blog" />
        <PostList list={[testPost]} />
      </div>
    );
  }
}

export default Blog;
