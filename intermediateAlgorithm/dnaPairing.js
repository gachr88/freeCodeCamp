function pairElement(str) {
    let pairBase = ["AT","CG"];
    let arrStr = str.split("");
    let dna = [];
    
    arrStr.forEach((w,index)=>{
      for(let base of pairBase)
      {
         if(base.includes(w))
         {
           let c = base.replace(w,'');
           dna[index]=[w,c];         
           break;
         }
      }
    })
   
    console.log(dna);
    return dna;
  }
  
  pairElement("ATCGA");