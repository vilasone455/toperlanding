import { HeadPost } from './HeadPost'

import ReactMarkdown from 'react-markdown'

export default function BlogPost({ content, meta}) {
  return (
    <div>
      
              <HeadPost meta={meta} isBlogPost />
              <ReactMarkdown source={content} />
    
     
    </div>
  )
}
