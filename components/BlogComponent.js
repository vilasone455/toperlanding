
import { useState , useEffect } from 'react';
import dashify from 'dashify';
import Container from './Container';
import Chip from './Chip';
import ReactMarkdown from 'react-markdown'
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";
import Loading from './Loading';

import { addPost , getPostBySlogFb, updateBlog } from '../postapi';
import { useRouter } from 'next/router';


const BlogComponent = ({slug , isEdit}) => {

    const [post, setPost] = useState({
        title: "Blog Title",
        content: "",
        tags : []
    })

    const router = useRouter()

    const [isTitleEdit, setTitleEdit] = useState(false)

    const [isChipEdit, setisChipEdit] = useState(false)

    const [chipAdd, setchipAdd] = useState("")

    const [description, setdescription] = useState("")

    const [isLoading, setisLoading] = useState(false)

    const ChipList = ({items = []}) =>
    {items.map(t=>{
        return (<Chip title={t} key={"chip" + t} onDelete={()=> deleteChip(t)} />)
    })}

     useEffect(async ()  =>  {
       
        if(isEdit){
            
            if(slug === undefined) return
       
            let postdata = await getPostBySlogFb(slug)

            if(postdata.error){
                alert("error")
                return
            }
       
            let postset = {
                title : postdata.meta.title,
                content : postdata.content,
                tags : postdata.meta.tags
            }

            setPost(postset)
            
        }
        
    }, [slug])

    const onChange = (e) => {
        const { value, name } = e.target;
        setPostData(name, value)
    }

    const setPostData = (propname, value) => {
        setPost(prevState => ({ ...prevState, [propname]: value }));
    }

    const onSubmit = async (e) => {
        
        e.preventDefault()
        let date = new Date().toISOString().slice(0, 10)
        let tags =post.tags

        let add = {
            slug: dashify(post.title),
            title: post.title,
            date,
            description,
            tags,
            content: post.content
        }
        setisLoading(true)
        if (isEdit){
            await updateBlog(slug ,add)
            router.replace("../../admin/post/" + add.slug)
        }else{
            await addPost(add)
            router.replace("../admin/viewpost")
        } 
        setisLoading(false)
    }

    const onUploadImage = async function* (data) {
        // Promise that waits for "time" milliseconds
        const wait = function (time) {
          return new Promise((a, r) => {
            setTimeout(() => a(), time);
          });
        };
    
        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest
    
        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield "https://picsum.photos/300";
        await wait(2000);
    
        // returns true meaning that the save was successful
        return true;
      };

    const openChipEdit = () => {
        setisChipEdit(true)
        setchipAdd("")
    }

    const deleteChip = (name) => {
        let indexof = post.tags.indexOf(name)
        if(indexof === -1) return
        
        let newtag =post.tags
        newtag.splice(indexof,1)
        setPostData("tags" , newtag)
    }

    const addChip = () => {
        let newtag = post.tags
        newtag.push(chipAdd)
        setPostData("tags" , newtag)
        setisChipEdit(false)
    }

    function getPageTitle() {
        return (isEdit) ? "Edit Post" : "New post"
    }

    return (
        <Container pageTitle={getPageTitle()} description="Post ss">
            <Loading isLoading={isLoading} />
            <div className="flex">
                <div className="w-3/6 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form>
                                <div className="mb-4">
                                    {isTitleEdit}
                                    {isTitleEdit ? (<input type="text" className="w-full text-2xl" style={{
                                        outline: "none", caretColor: "gray",
                                        caretShape: "underscore"
                                    }} name="title"
                                        id="title" defaultValue required onChange={onChange} value={post.title} onBlur={() => setTitleEdit(false)} />)
                                        : (<><label className="text-2xl text-gray-600" onClick={() => setTitleEdit(true)}>{post.title}</label><br /></>)}

                                </div>
                                {isChipEdit ? (<div className="mb-4">
                                <input type="text" className="border-2 border-gray-300 p-2 w-full" placeholder="Enter Chip name"
                                value={chipAdd} onChange={e =>setchipAdd(e.target.value)} onBlur={addChip} />
                                </div>) : ""}
                                

                                <div className="mb-4 p-2 w-full flex border-2">
                          
                                    {post.tags.map(t=>{
                                        return (<Chip title={t} key={"chip" + t} onDelete={()=> deleteChip(t)} />)
                                    })}
                         
                                    <div className="flex justify-center items-center" onClick={openChipEdit}>

                                        <img src="https://img.icons8.com/android/24/000000/plus.png" />

                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Description</label><br />
                                    <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)" />
                                </div>
                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br />
                                    <ReactMde
                                        name="content"
                                        value={post.content}
                                        onChange={e => setPostData("content", e)}
                                        disablePreview={true}
                                        childProps={{
                                            writeButton: {
                                                tabIndex: -1
                                            }
                                        }}
                                    />

                                </div>
                                <div className="flex p-1">
                                    <select className="border-2 border-gray-300 p-2" name="action">
                                        <option>Save Only</option>
                                        <option>Save and View</option>
                                    </select>
                                    <button className="p-3 bg-blue-500 text-white hover:bg-blue-400" onClick={onSubmit}>Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-3/6">
                    <ReactMarkdown source={post.content} />
                </div>
            </div>

        </Container>
    );
};

export default BlogComponent;