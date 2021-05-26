export const transpose = (array) => {
  let tamaño = [];
  let maximo = 0;

  for(let i=0; i <array.length; i++){
    maximo= array[i].length>maximo? array[i].length : maximo;

    for(let j=0; j<maximo;j++){
      tamaño[j] = tamaño[j] || Array(i).fill(' ').join('');

      tamaño[j] +=  array[i][j] || " "; 
      
      if(i === array.length - 1 && j>= maximo-1)
        tamaño[j] = tamaño[j].replace(/(\s*\S+)+\s+/,'$1');
    }
  }
 
  return tamaño;
};