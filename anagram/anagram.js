export const findAnagrams = (comparador, lista) => {
  let anagrams = [];
  let compare = comparador.toLowerCase().split("").sort().join();
  for (let i = 0; i < lista.length; i++) {
    if(lista[i].toLowerCase().split("").sort().join() == compare && 
    lista[i].toLowerCase() != comparador.toLowerCase()){
      anagrams.push(lista[i]);
    }
  }
  return anagrams;
};