import React, { useState, useEffect } from 'react'
import { db, storage } from '../utils/db'

export default function GalleryManager() {

    const [images, setimages] = useState([])

    const [imageUpload, setimageUpload] = useState(null)

    const [addUrlInput, setaddUrlInput] = useState("")

    const [isAddUrlToggle, setisAddUrlToggle] = useState(false)

    useEffect(() => {
        getAllImageV2()
    }, [])

    const getAllImageV2 = async () => {
        let galleryRs = await db.collection("gallerys").get()
        let gallerys = galleryRs.docs.map(entry => entry.data());
        let images = []
        gallerys.forEach(image => {
            alert(image.isUrl)
           images.push({url : image.url , name : image.name , isUrl : image.isUrl})
        });
        setimages(images)
    }

    const addUrl = async () => {
        await db.collection("gallerys").add({url : addUrlInput , userId : "" , name : addUrlInput , isUrl : true})
        addImage(addUrlInput , addUrlInput , true)
    }

    const deleteImage = async (name , isUrl) => {
        let imageRef = await db.collection("gallerys").where("name" , "==" , name).get()
        if(imageRef.docs[0]){
            alert(isUrl)
            if(!isUrl){
                await storage.ref(`images/${name}`).delete()
            }        
            await imageRef.docs[0].ref.delete()    
            let newimg = [...images];
            let index = newimg.findIndex(image=>image.name === name)
            newimg.splice(index , 1) 
            setimages(newimg)
        }
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setimageUpload(image)
            handleUpload(image)
        }
    };

    const toggleAddUrl = () => {
        setisAddUrlToggle(true)
        setaddUrlInput("")
    }

    const handleUpload = (image) => {

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL()
                    .then(url => {
                        db.collection("gallerys").add({url : url , userId : "" , name : image.name})
                        addImage(url , image.name)
                    });
            }
        );
    };

    const startUpload = () => {
        let filelem = document.getElementById("imgele")
        filelem.click()
    }

    function addImage(url , name , isUrl = false) {
        let imageAdd = { url: url, name: name , isUrl : isUrl }
        const newimg = [...images, imageAdd]
        setimages(newimg)
        return newimg
    }

    return (
        <div id="modal_overlay" className="absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
  
        <div id="modal" className="pacity-0 transform relative w-10/12 md:w-3/4 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300">
          {/* button close */}
          <button onclick="openModal(false)" className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white">
            ✗
          </button>
   
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-600">Gallery</h2>
          </div>
          
          <div className="w-full p-3">
                    <button onClick={toggleAddUrl}>Add Url</button>
                    <button onClick={startUpload}>Add Image</button>
                    {(isAddUrlToggle ? <>
                        <input type="text" onChange={e=>setaddUrlInput(e.target.value)} value={addUrlInput} className="" />
                        <button onClick={addUrl}>Save</button>
                    </> : "")}
                   
                    <input type="file" id="imgele" onChange={handleChange}  style={{display:"none"}} />

                    <div className="grid grid-cols-6 gap-2">
                        {images.map(image => {
                            return (<div className="w-36 h-36 round overflow-hidden">
                                <button className="absolute" onClick={()=>deleteImage(image.name , image.isUrl)}>X</button>
                                <img src={image.url} alt={image.name} className="object-cover " />
                            </div>)
                        })}
                    </div>
          </div>
        
          <div className="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">Save</button>
            <button onclick="openModal(false)" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none">Close</button>
          </div>
        </div>
      </div>


    )
}
