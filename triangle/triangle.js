//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort((a, b) => b - a);
    this.equality = (sides) => sides[0] <= sides[1] + sides[2]
  }

  get isEquilateral() {
    return this.sides.filter(onlyUnique).length === 1 && this.equality(this.sides);
  }

  get isIsosceles() {
    return this.sides.filter(onlyUnique).length <= 2 && this.equality(this.sides);
  }

  get isScalene() {
    return this.sides.filter(onlyUnique).length === 3 && this.equality(this.sides);
  }
}

const onlyUnique = (value, index, self)  => self.indexOf(value) === index && value !== 0;