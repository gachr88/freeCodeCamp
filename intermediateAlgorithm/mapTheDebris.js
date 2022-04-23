function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let a =0, T=0;
    let newArr = arr.map(elem =>{
      a =  earthRadius + elem.avgAlt;
      T = (2* Math.PI)*(Math.sqrt(Math.pow(a,3)/GM));   
      return {
        name:elem.name,
        orbitalPeriod:Math.round(T)
      }
    })
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);