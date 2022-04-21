function steamrollArray(arr) {
    let newArr = [];
    let i=0;
    extract(arr, newArr)
    //console.log(newArr)
      
    
    return newArr;
    
  }
  
  function extract(val, acum)
  {
    
    if(Array.isArray(val))
    {
      val.forEach(n => steamrollArray(n, acum))
    }  
    if((typeof val) === "number")
    {    
      acum = [...acum, val];    
      console.log(val, acum)
    }
    //return val;   
  }
  
  
  steamrollArray([1, [2], [3, [[4]]]]);