import type { Arma } from "./Armas.js";

export class Ametralladora implements Arma {
  private municiones: number;

  constructor(municiones: number) {
    this.municiones = municiones;
  }

  disparar(): number {
    if (this.municiones <= 0) {
      return 0;
    }

    this.municiones--;
    return 2;
  }

  getMuniciones(): number {
    return this.municiones;
  }
}
