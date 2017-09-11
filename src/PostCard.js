import React from 'react';
import renderHTML from 'react-render-html';

class PostCard extends React.Component {
  render() {
    const post = this.props.post
    const open = this.props.open
    return(
      <div className="post-card" onClick={this.props.onClick}>
        <span className="title">{post.title}</span>
        <span className="author">{post.author}</span>
        <span className="date">{post.inserted_at}</span>
        {open ?
          (
            <div className="content">{renderHTML(post.content)}</div>) : ''}
      </div>
    );
  }
}

export default PostCard;
