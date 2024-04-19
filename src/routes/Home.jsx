import React from 'react'
import { Link } from 'react-router-dom'
// import data1 from './../data/Array_1.json';
// import  data2 from './../data/Array_1.json';
import { mergeddata } from './../data/mergeddata.js';
export const Home = () => {
  
  let arrtostr=(arr,str)=>{
      for(let i=1;i<arr.length-2;i+=2){
          if(arr[i]){str+=arr[i];}
          if(arr[i-1]){str+=arr[i-1];}
      }
      return str
  }
 
  
  
  
  let maxdif=(arr)=>{
      let ans1=0;
      for(let i=0;i<arr.length;i++){
          
      for(let j=i;j<arr.length;j++){
          if(arr[j]>arr[i] && arr[j]-arr[i]>ans1){
              ans1=arr[j]-arr[i]
          }
      }
      }
      return ans1;
  }
  
  
  
  let strfun=(str1,str2)=>{
      
      for(let i=0;i<str1.length;i++){
          str3 = str1.slice(0, i) + str1.slice(i+1,str1.length);
          if(str3==str2){
           return true   
          }
      }
      
      return false
  }
  return (
    
    <div className='App'>
      <header className='App-header'>
        <Link to='list' onClick={mergeddata}>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
