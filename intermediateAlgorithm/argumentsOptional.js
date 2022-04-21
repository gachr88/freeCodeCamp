function addTogether(...rest) {
    if(typeof rest[0] !== 'number') return undefined;
    if(rest.length==2)
    {
      if(typeof rest[1] !== 'number') return undefined;
      console.log(rest.reduce((i,n)=>i+n))
      return rest.reduce((i,n)=>i+n);
    }
    else
    {
      return (n)=>{
        console.log(n)
        if(typeof n !=="number")
        {
          return undefined;
        }
        return n+rest[0];
      }
    }
      
  }
  
  addTogether(2, "3");