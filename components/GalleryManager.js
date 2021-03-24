import React, { useState, useEffect } from 'react'
import { storage } from '../utils/db'

export default function GalleryManager() {

    const [images, setimages] = useState([])

    const [imageUpload, setimageUpload] = useState(null)

    useEffect(() => {
        let imagesRef = storage.ref("images")
        imagesRef.listAll().then(rs => {
            let imagePromise = []
            let gallerys = []
            rs.items.forEach(async function (imageRef) {
                imagePromise.push(imageRef.getDownloadURL())
            });

            Promise.all(imagePromise).then(imageurls=>{
                imageurls.forEach(url=>{
                    gallerys.push({link : url , name : ""})
                })

                setimages(gallerys)
            })
            
            
        })
    }, [])

    const handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setimageUpload(image)
        }
    };

    const handleUpload = () => {

        const uploadTask = storage.ref(`images/${imageUpload.name}`).put(imageUpload);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {

                storage.ref("images").child(imageUpload.name).getDownloadURL()
                    .then(url => {
                        addImage(url)
                    });
            }
        );
    };

    const startUpload = () => {
        let filelem = document.getElementById("imgele")
        filelem.click()
    }

    async function displayImage(imageRef) {
        let rs = await imageRef.getDownloadURL()
        addImage(rs)
    }

    function jsonToImage(url) {
        let imageAdd = { link: url, name: "" }
        return imageAdd
    }

    function addImage(url) {

        let imageAdd = { link: url, name: "" }
        const newimg = [...images, imageAdd];
        setimages(newimg);
        alert("add  " + url )

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
                    <button onClick={startUpload}>Add Image</button>
                    <input type="file" id="imgele" onChange={handleChange} />
                    <button onClick={handleUpload}>Upload</button>
                    <div className="grid grid-cols-4 gap-4">
                        {images.map(image => {
                            return (<div className="w-50 h-50 object-cover round">
                                <img src={image.link} alt={image.name} />
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
