function steamrollArray(arr) {
  let flatArr = [];
  
  flattenArray(arr, flatArr)              
  return flatArr;
  
}

function flattenArray(val, flatArr)
{          
  if(Array.isArray(val))
  {      
    val.forEach(n => flattenArray(n, flatArr))
  }  

  if(!Array.isArray(val))
  {                       
    flatArr.push(val)
  }  
}


steamrollArray([[["a"]], [["b"]]]);