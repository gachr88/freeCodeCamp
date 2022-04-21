function dropElements(arr, func) {
    let status = false;
    const res = arr.filter(n=>{
      status = status === false ? func(n) : true;    
      return status;
    });  
    return res;
  }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;});