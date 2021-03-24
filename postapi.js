
import  path   from "path"
import matter from "gray-matter"
import axios from 'axios';
import { db } from "./utils/db";
const baseUrl = "./posts/"

export async function testApi(){
  let rs = await axios.get("./api/post")
  console.log(rs)
}

export async function addPost(post){
  let rs = await db.collection("posts").add(post)
  
}

export async function getPosts() {

  let postRs = await db.collection("posts").get()
	let rs = postRs.docs.map(entry => entry.data());

  const posts = rs.map(p=>{
    return jsonToPost(p)
  })
  
  return posts
}

export async function deletePost(slug) {
  let rs = await db.collection("posts").where("slug" , "==" , slug).get()
  if(rs.size === 0) return
  await rs.docs[0].ref.delete()
  
}

export async function updateBlog(slug , update) {
  let rs = await db.collection("posts").where("slug" , "==" , slug).get()
  if(rs.size === 0) return

  await rs.docs[0].ref.update(update)
  
}

function jsonToPost(p) {

    let meta = {
      title : p.title,
      date : p.date,
      description : p.description,
      tags : p.tags
    }

    let res = {
      slug : p.slug,
      meta,
      content : p.content
    }
    return res
}

export async function getPostBySlogFb(slug){
  let postRs = await db.collection("posts").where("slug" , "==" , slug).get()
  if(postRs.size === 0) return {error : "No Post Found"}
  let postData = postRs.docs.map(entry => entry.data());

  return jsonToPost(postData[0])
}

export function getAllPosts(fields = []) {
  console.log("is you fucking load")
  const posts = ((context) => {
    const keys = context.keys()
    console.log(keys)
    const values = keys.map(context)

    const data = keys.map((key, index) => {

      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
     
      const value = values[index]

      console.log(value.default)
      
      const document = matter(value.default)

      let tagList = document.data.updatetype.split(",")

      return {
        meta: {
          ...document.data,
          tags : tagList
        },
        content: document.content,
        slug,
      }
    })
    return data
  })(require.context('./posts', true, /\.md$/))
  return posts
}

export async function getPostBySlug(slug) {
  let url = baseUrl + slug + ".md"
  console.log(url)
  let fileContent   = await import(`./posts/${slug}.md`); 
  console.log(fileContent.default)
  const document = matter(fileContent.default)
  console.log(document.data)
  return {
      slug,
      meta: document.data,
      content : document.content
  }
}

