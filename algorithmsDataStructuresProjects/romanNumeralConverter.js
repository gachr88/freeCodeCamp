function convertToRoman(num) {
    let arrNum = num.toString().split('');
    const dict = {
      1000:'M',
      900:'CM',
      500:'D',
      400:'CD',
      100:'C',
      90:'XC',
      50:'L',
      40:'XL',
      10:'X',
      9:'IX',
      5:'V',
      4:'IV',
      1:'I'
    }
    let tam = arrNum.length;  
    let romanNumber = '';
    let keys = Object.keys(dict).sort(
      (a,b) => {return b-a}
    );  
    let n = '';  
    let pos = 0;
    for(const [index, val] of Object.entries(arrNum))
    {        
      n = parseInt(val+'0'.repeat((tam-1) - index));          
      while(n>0)
      {
          if(n-keys[pos]>=0)
          {
            n-=keys[pos];
            romanNumber += dict[keys[pos]];
          }
         
          if(n-keys[pos]<0)
          {
            pos++;         
          }
      }          
    }
    console.log(romanNumber);
   return romanNumber;
  }
  
  convertToRoman(97);