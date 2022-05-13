import Link from 'next/link'
import React from 'react'
import Container from '../../components/Container'
import GalleryComponent from '../../components/GalleryComponent'
import GalleryManager from '../../components/GalleryManager'

export default function Gallery() {
    return (
        <Container>
        <div class="bg-indigo-700 px-4 py-5 border-b rounded-t sm:px-6">
         <h3 class="text-lg leading-6 font-medium text-white">
           Gallerys
         </h3>
       </div>
       <div class="bg-white shadow overflow-hidden sm:rounded-md">
         <GalleryComponent></GalleryComponent>

      
       </div>

</Container>
    )
}
