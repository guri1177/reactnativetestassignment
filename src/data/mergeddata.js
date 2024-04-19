import data1 from './Array_1.json';
import  data2 from './Array_1.json';

export const mergeddata=()=>{
    let unique=[];
  
     for(let i of data1){
      let count=0;
      for(let j of unique){
        if(i.id!==j.id){
          count++
        }
      }
      if(count==unique.length){
        unique.push(i);
      }
     }
     for(let i of data2){
      let count=0;
      for(let j of unique){
        if(i.id!==j.id){
          count++
        }
      }
      if(count==unique.length){
        unique.push(i);
      }
     }
    return unique
  
}