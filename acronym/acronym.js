

export const parse = (palabra) => {
  palabra = palabra.split(/[^a-z']+/i);
  let acronym = '';

  for (let i = 0; i < palabra.length; i++ ){
    acronym += palabra[i][0].toUpperCase();
  }
  return acronym;
};