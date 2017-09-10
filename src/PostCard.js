import React from 'react';

class PostCard extends React.Component {
  render() {
    const post = this.props.post
    return(
      <div className="post-card">
        <span className="title">{post.title}</span>
        <span className="author">{post.author}</span>
        <span className="content">{post.content}</span>
      </div>
    );
  }
}

export default PostCard;
