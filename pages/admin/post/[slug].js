import React from 'react'
import BlogComponent from '../../../components/BlogComponent'
import { useRouter } from 'next/router'

export default function EditPost() {

    const router = useRouter()
    const { slug } = router.query

    return (
        <BlogComponent isEdit={true} slug={slug}>
            
        </BlogComponent>
    )
}
