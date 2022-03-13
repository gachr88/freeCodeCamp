function telephoneCheck(str) {
    let regexArr = [
      /^1{0,1}[\s]*[0-9]{3}[\s-]*[0-9]{3}[\s-]*[0-9]{4}$/,
      /^1{0,1}[\s]*[0-9\(\)]{5}\s*[0-9]{3}-[0-9]{4}$/,    
  
    ];
    for(const regex of regexArr)
    {    
      if(str.match(regex))
      {      
        return true;
      }
    }
    return false;
  }
  
  telephoneCheck("1 555 555 5555");