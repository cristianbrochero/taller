

export const gigasecond = (segundo) => {
  var tiempo = segundo.getTime();
  var final = new Date(tiempo + 1000000000000);
  return final;

};
