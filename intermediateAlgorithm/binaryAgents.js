function binaryAgent(str) {
    const arr = str.split(" ");

    let binSize= 0, 
        expo = 0,
        charCode = 0,
        newStr = "";

    arr.forEach(bin => {
      binSize = bin.length;
      for(let i = 0; i < binSize; i++)
      {
        if(bin[i] == 1)
        {
          expo = (binSize - 1) - i;
          charCode += Math.pow(2,expo);                        
        }      
      }
      newStr += String.fromCharCode(charCode);
      charCode = 0;      
    })
    
    return newStr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");