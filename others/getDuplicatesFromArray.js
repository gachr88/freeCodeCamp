function duplicates(arr)
{
  let duplicates = [];  
  for(let item of arr)
  {
    let rest = arr.filter(origItem=> item != origItem);
    //console.log(rest)
    if(arr.length - rest.length>1)
    {
      duplicates.push(item);
    }
    arr = rest;
  }
  console.log(duplicates); 
  return duplicates;
}
duplicates([1,2,3,1,5,9,7,5]);