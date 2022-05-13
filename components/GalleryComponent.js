import React, {useState , useEffect} from 'react'
import { db , storage } from '../utils/db'

export default function GalleryComponent(props) {

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
        <div>
            <div>
                {props.children}
            </div>
                    <div className="w-full p-3">
                    <button class="py-1 px-4 capitalize bg-gray-800 text-white font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Download</button>
                    <button  class="bg-gray-800 p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
      <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    </button>
        <button onClick={toggleAddUrl} className="inline-flex items-center m-2 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Url</button>
        <button onClick={startUpload} className="inline-flex items-center m-2 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Image</button>
        {(isAddUrlToggle ? <>
            <input type="text" onChange={e=>setaddUrlInput(e.target.value)} value={addUrlInput} className="" />
            <button onClick={addUrl}>Save</button>
        </> : "")}
       
        <input type="file" id="imgele" onChange={handleChange}  style={{display:"none"}} />

        <div className="grid grid-cols-6 gap-2">
            {images.map(image => {
                return (<div className="w-50 h-36 round overflow-hidden">
                    <button className="absolute" onClick={()=>deleteImage(image.name , image.isUrl)}>X</button>
                    <img src={image.url} alt={image.name} className="object-cover " />
                </div>)
            })}
        </div>
</div>            
        </div>

    )
}
