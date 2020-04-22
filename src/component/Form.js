import React, { Component } from 'react'

export class Form extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.addPost(this.state);
  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
          </div><br />
          <div>
            <label htmlFor="content">Content</label><br />
            <textarea name="content" id="content" value={this.state.content} onChange={this.handleChange}></textarea>
          </div>
          <br />
          <input type="submit" value="Create Post" />
        </form>
      </div>
    )
  }
}

export default Form
