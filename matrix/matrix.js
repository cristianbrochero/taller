export class Matrix {
  filas = [];
  columnas = [];
  constructor(Estruc) {
    this.filas = Estruc
      .split("\n")
      .map((el) => el.split(" ").map(Number));

    this.columnas = this.filas[0].map((_,i) => this.filas.map(r => r[i]));
  }

  get rows() {
    return this.filas;
  }

  get columns() {
    return this.columnas;
  }
}