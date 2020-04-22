import React, { Component } from 'react'

export class Button extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  handleClick = event => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          Click Me!
        </button> <br />
        {this.state.count}
      </>
    )
  }
}

export default Button
