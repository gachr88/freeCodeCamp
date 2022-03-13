function uniteUnique(...arr) {  
    let mergedArr = arr.join().split(',');
    let newArr = [];
    mergedArr.forEach(num =>{
      if(!newArr.includes(parseInt(num)))
      {
        newArr.push(parseInt(num));
      }    
    });
  
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);