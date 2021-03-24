import React from 'react'
import FeatureItem from '../components/FeatureItem'
import Layout from '../components/Layout'
import StartMenu from  '../components/startmenu'
import {featureData} from '../data/features'
export default function Features() {
    return (
        <Layout pageTitle="Feature" description="Top Diagram Feature">
         <div className="container mx-auto px-8 py-12 ">
            <h2 className="text-4xl text-center mb-4">Feature List</h2>
            <p className="text-2xl text-center mb-8">Top Diagram have Many Feature</p>
            <div className="grid grid-cols-3 gap-8">
                {featureData.map(f=>{
                    return (
                        <FeatureItem title={f.title} icon={f.icon} key={`feature${f.title}`} />
                    )
                })}

            </div>
            
        </div>
        <StartMenu/>
        </Layout>
       
   
    )
}
