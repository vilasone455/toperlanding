import React from 'react'
import Layout from './Layout'

export default function Container(props) {
    return (
        <Layout pageTitle={props.pageTitle} description={props.description}>
            <div className="container mx-auto px-8 py-12">

            {props.children}

            </div>
           
        </Layout>
    )
}
