function palindrome(str) {
    const regex = /[a-z0-9]/ig;
    let cleanArr = str.toLowerCase().match(regex);
  
    if(cleanArr.join("") == cleanArr.reverse().join(""))
    {
      return true;
    }  
    return false;
  }
  
  palindrome("1 eye for of 1 eye.");