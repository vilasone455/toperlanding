import React from 'react'

export default function Tag({name}) {

    
    function mapNameToColor(){
        const mapColor = {
            "Improve" : "blue",
            "New Feature" : "red"
        }
        console.log(name)
        return mapColor[name]
    
    }

    return (
        <div className="mr-2">
          <svg height="12" width="12" className="inline mr-2">
            <circle cx="6" cy="6" r="5" fill={mapNameToColor()} />
          </svg>
          <span>{name}</span>
      </div>
    )
}
