import React from 'react';
import _ from 'lodash';
import PostCard from './PostCard';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: [],
      list: this.props.list,
    };
  }

  componentDidReceiveProps(nextProps) {
    const open = [];
    _.each(nextProps.list, () => {
      open.push(false);
    })
    this.setState({
      list: nextProps.list,
      open,
    })
  }

  postClick(ind) {
    console.log("called")
    const result = [false, false, false, false, false, false];
    result[ind] = !this.state.open[ind];
    const list = this.state.list;
    const id = this.props.list[ind].id;
    fetch(`http://localhost:4000/api/v1/posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        list[ind] = json;
        this.setState({
          open: result,
          list,
        });
      })
  }

  render() {
    const list = _.map(this.props.list, (post, index) => {
      return (
        <PostCard
          post={post}
          open={this.state.open[index]}
          onClick={this.postClick.bind(this, index)}
        />
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
