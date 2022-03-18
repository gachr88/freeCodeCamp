function checkCashRegister(price, cash, cid) {  
    let currency = [
      {"PENNY":0.01},
      {"NICKEL":0.05},
      {"DIME":0.1},
      {"QUARTER":0.25},
      {"ONE":1},
      {"FIVE":5},
      {"TEN":10},
      {"TWENTY":20},
      {"ONE HUNDRED":100}
    ]
    let pos= currency.length-1;
    let change = [];  
    let amountVal = 0, amountKey ='';
    let toReturn = cash - price;
    let aviable = 0;
    while(toReturn>0)
    {  
      amountVal = Object.values(currency[pos])[0];
      amountKey = Object.keys(currency[pos])[0];
  
      if(toReturn-amountVal<0)
      {
        pos--;
      }
      else
      {      
        toReturn -= amountVal;
        let currentChangePos = change.findIndex((item)=>   {
           return item[0]==amountKey;
        });
  
        aviable =cid.find(item => {
          console.log(item[0]==amountKey,item[0],item[1], amountKey, amountVal) 
          if(item[0]==amountKey)
          {
            item[1]-=amountVal
          }
          return item[0]==amountKey;
        })  
        if(aviable[1]<0)
        {
          console.log("INSUFFICIENT_FUNDS");
          return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        if(currentChangePos>=0)  
        {
          change[currentChangePos][1]+=amountVal;
        } 
        else
        {
          change.push([amountKey,amountVal]);
        }                
      }
      
    }    
    console.log({status: "OPEN", change: change});
    return {status: "OPEN", change: change};
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);