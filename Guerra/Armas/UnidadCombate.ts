import type { Arma } from "./Armas.js";
import { Escudo } from "../Escudo/Escudo.js";

export abstract class UnidadCombate {
  protected vida: number;
  private arma: Arma;
  private escudo: Escudo;

  constructor(vida: number, arma: Arma) {
    this.vida = vida;
    this.arma = arma;
    this.escudo = new Escudo(0);
  }

  disparar(objetivo: UnidadCombate): void {
    const danio = this.arma.disparar();
    objetivo.recibirDisparo(danio);
  }

  recibirDisparo(danio: number): void {
    const danioFinal = this.escudo.reducirDanio(danio);

    this.vida = Math.max(0, this.vida - danioFinal);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }

  equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  getVida(): number {
    return this.vida;
  }
}