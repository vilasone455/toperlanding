import React from 'react'

export default function FeatureItem(props) {

    const desc = () => {
      return props.description ? props.description : "You can get a quick snapshot of all your analytics on your beautiful dashboard."
    }

    return (
        <div className="w-full mb-10 sm:mb-0 ">
        <div className="relative ml-0 mr-0 sm:mr-10">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
          <div className="relative p-5 bg-white border-2 border-indigo-500 rounded-lg">
            <div className="flex items-center -mt-1">
                <img src={props.icon} className="feature-img w-8 h-8 text-indigo-500 fill-current"></img>
              
              <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 ">{props.title}</h3>
            </div>
            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">PREMIUM FEATURE</p>
            <p className="mb-2 text-gray-600">{desc()}</p>
          </div>
        </div>
      </div>
    )
}
