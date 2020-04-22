import React, { Component } from 'react';
import Button from './component/Button';
import Form from './component/Form';
import Posts from './component/Posts';

class App extends Component {
  state = {
    posts: []
  }

  addPost = post => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Button />

        <br />
        <br />
        <br />

        <Form addPost={this.addPost} />

        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
