function truthCheck(collection, pre) {
    let totalTrue = 0;
    collection.forEach(c=>{
      totalTrue += !!c[pre];    
    })
    return totalTrue == collection.length;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");