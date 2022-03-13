function convertHTML(str) {
    let dictionary = {
      '&':'&amp;',
      '<': '&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":"&apos;"
    }  
    let newStr = "";
    for(let c of str)
    {
      if(dictionary[c])
      {                      
        newStr+=dictionary[c];
      }
      else
      {
        newStr+=c;
      }    
    }  
    return newStr;
  }
  
  convertHTML("Dolce & Gabbana");