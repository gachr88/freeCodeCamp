function fearNotLetter(str) {
    let arrStr = str.toLowerCase().split("");
    let missingLetter = null;
    arrStr.reduce((prevC,c) =>{
      
      let nCurrentC = c.charCodeAt(0),
        nPrevC =  prevC.charCodeAt(0);
      
      if((nCurrentC - nPrevC)>1)
      {
        console.log(String.fromCharCode(nCurrentC-1));
        missingLetter = String.fromCharCode(nCurrentC-1);
        
      }  
      return c;
        
    })
    
    return missingLetter || undefined;
  }
  
  fearNotLetter("abce");