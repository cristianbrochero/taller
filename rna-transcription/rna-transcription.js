//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (secuencia) => {
  let Rnasecuencia = '';

  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] === 'C') {
      Rnasecuencia += 'G';
    } else if (secuencia[i] === 'G') {
      Rnasecuencia += 'C';
    } else if (secuencia[i] === 'A') {
      Rnasecuencia += 'U';
    } else if (secuencia[i] === 'T') {
      Rnasecuencia += 'A';
    }
  }
  return Rnasecuencia;
};
