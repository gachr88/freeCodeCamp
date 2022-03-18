function sumFibs(num) {  
    let arr = [];
    let sum = 0;
    let fibo = 0;
    let i = 0;
    do
    {
      if(i<=1)
      {
        fibo = 1;
        arr.push(fibo);      
      }
      else{
        fibo = arr[i-2]+arr[i-1];           
        arr.push(fibo)
  
      }
      
      if(fibo%2>0 && fibo<=num)
      {
        sum += fibo;      
      }    
      i++;    
    }while(fibo<=num)
    
    return sum;
  }
  
  sumFibs(1000);