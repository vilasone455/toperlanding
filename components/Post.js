import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { HeadPost } from "./HeadPost";

/*
article .post-body .read-more {

  .st-current {
    outline: blue dashed 1px !important;
}

  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 80px 0 5px 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.001) 0%, white 80%, white 100%);
}
*/


export const Post = ({ post }) => {
  const {slug , meta , content} = post

  function previewClass(){
    let base = "mb-2"
  }

  return (
    <div className="mb-12 shadow-md p-4">
      <HeadPost meta={meta} />
      <article className="mb-2 max-h-32 overflow-hidden">
        <ReactMarkdown source={content}/>
      </article>
      
      <Link href={"/blog/" + slug}  >
    
        <a className="read-more st-current">Read more &rarr;</a>
      
        
      </Link>

    </div>
  );
};
