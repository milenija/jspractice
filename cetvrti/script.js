  function rezultat(ulazniNiz, trazenaVrednost, vrednostZaZamenu)
{
  for(i = 0; i < ulazniNiz.length; i++) {
    if(trazenaVrednost == ulazniNiz[i]) {
     ulazniNiz[i] = vrednostZaZamenu;
    }
  }
  return ulazniNiz;
}

console.log(rezultat([1, 2, 3, 4, 5], 1, 14));


function isti(niz) 
{
  for(i = 0; i<niz.length-1; i++)
    {
     
      for(j = i+1; j<niz.length; j++)
      {
        if(niz[j] == niz[i])
          {
            return true;
          }
   
      }
       return false;  
     }
}
console.log(isti([1,2,3,5]));


function kojiNosim(weight1, weight2, maxWeight)
{
  if(weight1 + weight2 <= maxWeight)
    {
      console.log("Nosimo oba tereta.");
    }
  else if(weight1 > maxWeight && weight2 > maxWeight)
    {
      console.log("Ne nosimo nijedan teret.");
    }
  else if(weight1 <= maxWeight && weight2 > maxWeight)
    {
      console.log("Nosimo prvi teret.");
    }
  else if(weight1 > maxWeight && weight2 <= maxWeight)
    {
      console.log("Nosimo drugi teret.");
    }
  else if(weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight)
    {
      console.log("Možemo da biramo koji ćemo teret nositi, ali ne možemo oba da ponesemo.");
    }
 
}
kojiNosim(50, 51, 100);