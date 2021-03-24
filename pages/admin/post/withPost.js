import React, { Component } from 'react'
import Post from '../post'

const withBlog = (WrappedComponent) => {
  return class ComponentWithBlog extends Component {

    

    render() {
      
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withBlog