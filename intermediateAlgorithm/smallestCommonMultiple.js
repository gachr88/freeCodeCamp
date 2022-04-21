function smallestCommons(arr) {
    const [startNum, endNum] = arr.sort((a,b)=>a-b);

    let res = 0;
    let num = startNum > 1 ? startNum:2;
    let commonMultiple = 0;
    
    while(commonMultiple === 0)
    {
      res = 0;
      for(let i=startNum; i<=endNum; i++)
      {      
        if(i>1)
        {
          res += (num % i) === 0 ? 0:1;
        } 
      }
      if(res===0){
        commonMultiple = num;
      }    
      num++;
    }
    
    return commonMultiple;
  }
  
  smallestCommons([2,10]);