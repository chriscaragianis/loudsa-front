import React from 'react';
import _ from 'lodash';
import PostCard from './PostCard';

class PostList extends React.Component {
  render() {
    const list = _.map(this.props.list, (post, index) => {
      return (
        <PostCard post={post} />
      )
    });
    return (
      <div className="post-list">
        {list}
      </div>
    );
  }
}

export default PostList;
