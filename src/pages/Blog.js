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

  componentDidMount() {
    const request = new Request('http://localhost:4000/api/v1/posts', {
      method: 'GET',
    });
    const list = fetch(request)
      .then((res) => { return res.json(); })
      .then((json) => { console.log(json); });
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
