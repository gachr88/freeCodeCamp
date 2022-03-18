function sumPrimes(num) {
    let sum = 0;
    let arr = [];
    let count = 0;
    let i = 2;
    while(i<=num)
    {
      count = 0;
      for(let j=1; j<=num; j++)
      {
        if(i%j == 0)
        {
          count++;
        }
      }
      if(count==2)
      {
        arr.push(sum)
        sum += i;
      }
      i++;
      console.log(i,sum)
    }
    
    return sum;
  }
  
  sumPrimes(10);