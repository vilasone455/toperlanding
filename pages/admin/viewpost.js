import Link from 'next/link';
import React from 'react'
import { deletePost, getPosts } from "../../postapi";
import Container from '../../components/Container'
import { useRouter } from 'next/router';

export default function viewpost({ posts }) {

    const router = useRouter()

    const onDelete = (slug,i) => {
        deletePost(slug)
        refreshData()
        
    }

    const refreshData = () => {
        router.replace(router.asPath);
      }

    return (
        <Container>
                 <div class="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-white">
                    All Post
                  </h3>
                </div>
                <div class="bg-white shadow overflow-hidden sm:rounded-md">
                  <ul class="divide-y divide-gray-200">
                  {posts.map((p,index) => {
                     
                    return (  <li>
                        <a class="block hover:bg-gray-50">
                          <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                              <p class="text-xl font-medium text-gray-700 truncate">
                                {p.meta.title}
                              </p>
                              <div class="ml-2 flex-shrink-0 flex">
                                <p onClick={()=> onDelete(p.slug,index)} class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  On-Track
                                </p>
                                <Link  href={`./post/${p.slug}`}>
                                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Edit Post
                                </p>
                         
                                </Link>
                          
                              </div>
                            </div>
                            <div class="mt-2 sm:flex sm:justify-between">
                              <div class="sm:flex">
                                <p class="flex items-center text-sm font-light text-gray-500">
                                  <time datetime="2020-01-07">{p.meta.date}</time>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    )
                })}
                   

                  </ul>
                  <Link href="./post">
                  <button type="button" class="inline-flex items-center m-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              New Post
            </button>  
                  </Link>
               
                </div>
     
        </Container>
    )
}
export async function getStaticProps() {
    let posts = await getPosts()
    return {
        props: {
            posts: posts,
        },
    };
}
