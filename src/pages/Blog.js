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
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    const request = new Request('http://localhost:4000/api/v1/posts', {
      method: 'GET',
    });
    const list = fetch(request)
      .then((res) => { return res.json(); })
      .then((json) => {
        this.setState({
          list: json,
        })
      })
  }

  render() {
    return(
      <div className="blog-page page">
        <TitleBar text="blog" />
        <PostList list={this.state.list} />
      </div>
    );
  }
}

export default Blog;
