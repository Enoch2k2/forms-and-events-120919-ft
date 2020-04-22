import React, { Component } from 'react'

export class Posts extends Component {
  render() {
    let posts = this.props.posts.map((post, i) => {
      return (<li key={i}><p>{post.title}</p><p>{post.content}</p></li>)
    })
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts}
        </ul>
      </div>
    )
  }
}

export default Posts
