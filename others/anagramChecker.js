function anagramChecker(word1, word2)
{
  let cleanWord1 = word1.replace(/\W/g,'').toLowerCase().split("").sort();
  let cleanWord2 = word2.replace(/\W/g,'').toLowerCase().split("").sort();
  console.log(cleanWord1, cleanWord2);
  return cleanWord1.join('') == cleanWord2.join('');
}

console.log(anagramChecker("listen", "silent"));
