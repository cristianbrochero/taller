

export const reverseString = () => {
  frase = frase.split(/[^a-z']+/i);
  let acronym = '';

  for (let i = 0; i < frase.length; i++ ){
    acronym += frase[i][0].toUpperCase();
  }
  return acronym
};
