import Layout from "../components/Layout";
import {useEffect} from 'react'
import { Post } from "../components/Post";
import {  getAllPosts, getPosts, testApi } from "../postapi";
import { db } from "../utils/db";

export default function PostPage({posts , postsD}) {

	useEffect(() => {
		//testApi()
	}, [])

	return (
		<Layout>

			<div className="container mx-auto px-8 py-12 flex jusitfy-between ">
				<div className="w-2/5 flex flex-col items-center">
					<div class="flex w-full max-w-xs  bg-white border">
						<ul class="flex flex-col w-full">
							<li class="my-px">
								<a href="#"
									class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">

									<span class="ml-3">🔥 Change Name Web</span>
								</a>
							</li>
							<li class="my-px">
								<a href="#"
									class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">

									<span class="ml-3">📅 March Update</span>
								</a>
							</li>

							<li class="my-px">
								<a href="#"
									class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">

									<span class="ml-3">📅 Release</span>
								</a>
							</li>

						</ul>
					</div>
				</div>
				<div className="w-2/5">
					{posts.map((post) => (
						<Post key={post.slug} post={post} />
					))}
				</div>

			</div>

		</Layout>

	);
}

export async function getStaticProps() {
	console.log("fucking you please call ")
	let posts = await getPosts()

	//let postList = await getPosts()

	return {
	  props: {
		posts : posts,
	  },
	};
  }

// My blog: https://www.ibrahima-ndaw.com/