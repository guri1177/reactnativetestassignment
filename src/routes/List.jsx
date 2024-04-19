import React from 'react'
import unique from './../data/mergeddata.js'
export default function List() {
  let merged=unique

  console.log(unique)
  let filtre=(id)=>{
    return merged.filter((ele)=>ele.id==id)
  }
  return <div>{unique.map((ele)=>{
    return <div>
                <p>{ele.body}</p>
                <p>{ele.name}</p>
                <button onClick={()=>filtre(ele.id)}>delete</button>
            </div>
  })}</div>
}
