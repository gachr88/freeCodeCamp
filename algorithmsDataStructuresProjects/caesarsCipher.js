function rot13(str) {
    let alphabetStart= 65;
    let alphabetEnd = 90;
    let arrStr = str.split("");
    let diff = 0;
    let rst = '';  
    for(const c of arrStr)
    {
      if(c.match(/[A-Z]/ig))
      {
        if(c.charCodeAt(0) - 13 < alphabetStart)
        {
          diff = alphabetStart - (c.charCodeAt(0) - 13);
          rst += String.fromCharCode((alphabetEnd-diff) + 1);
        }
        else
        {
          rst+= String.fromCharCode(c.charCodeAt(0)-13)
        }       
      }
      else
      {
        rst += c;
      }       
    }
    return rst;
  }
  
  rot13("SERR PBQR PNZC");