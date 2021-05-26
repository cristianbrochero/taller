//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (cliente, lista) => {
  let anagrams = [];
  let compare = cliente.toLowerCase().split("").sort().join();
  for (let i = 0; i < lista.length; i++) {
    if(lista[i].toLowerCase().split("").sort().join() == compare && 
    lista[i].toLowerCase() != cliente.toLowerCase()){
      anagrams.push(lista[i]);
    }
  }
  return anagrams;
};
