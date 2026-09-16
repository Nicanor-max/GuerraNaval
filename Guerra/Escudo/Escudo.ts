export class Escudo {
  constructor(private porcentaje: number) {}

  reducirDanio(danio: number): number {
    return danio * (1 - this.porcentaje / 100);
  }
}