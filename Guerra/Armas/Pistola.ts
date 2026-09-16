import type { Arma } from "./Armas.js";

export class Pistola implements Arma {
  private municiones: number;

  constructor(municiones: number) {
    this.municiones = municiones;
  }

  disparar(): number {
    if (this.municiones <= 0) {
      return 0;
    }

    this.municiones--;
    return 1;
  }

  getMuniciones(): number {
    return this.municiones;
  }
}