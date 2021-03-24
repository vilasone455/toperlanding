import React from 'react'
import BlogPost from '../../components/BlogPost'
import Layout from '../../components/Layout'
import { getPostBySlogFb, getPostBySlug } from '../../postapi'

export default function PostDetail({post}) {
    return (
        <Layout>
            <BlogPost content={post.content} meta={post.meta}></BlogPost>
        </Layout>
    )
}

PostDetail.getInitialProps = async (context) => {
    const { slug } = context.query
    let post = await getPostBySlogFb(slug)
    let err = ""
    if(Object.prototype.hasOwnProperty.call(post, 'errir')){
        post = {}
        err = "No Post Found"
    }

    return {
        post,
        error : err
    }
  }
