import React from 'react'

export default function FeatureItem(props) {
    return (
        <div className="px-6 py-4 flex flex-col h-ful border-l-4 border-gray-400 rounded-md shadow-md ">
            <img className="w-12 mx-auto" src={props.icon} />
            <h2 className="font-bold text-xl mt-3 mb-2 text-gray-800 flex items-center">
                {props.title}
            </h2>
            <p className="text-gray-700 text-base flex-grow">
            Have an existing database you want to visualise? Import its SQL script to automatically generate a diagram
            </p>
            <p className="text-sm leading-5 font-medium text-indigo-600 w-full text-right mt-2">
                Learn more
            </p>
        </div>
    )
}
