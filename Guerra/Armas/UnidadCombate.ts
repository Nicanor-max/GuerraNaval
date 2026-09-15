export abstract class UnidadCombate {
    protected Vida: number;
    protected escudo?: Escudo;
    protected arma: Arma; 
    }

    constructor(vida: number, arma: Arma) {
        this.Vida = vida;
        this.arma = arma;
    }

    disparar(objetivo: UnidadCombate): void { const danio = this.arma.calcularDanio();
        objetivo.recibirDanio(danio);
    }

    recibirDanio(danio: number): void {
        if (this.escudo) {
            danio = this.escudo.reducirdanio(danio);
    }
    this.Vida = Math.max(0, this.Vida - danio);
    }

    estaVivo(): boolean {
        return this.Vida > 0;
    }
    
    equiparEscudo(escudo: Escudo): void {
        this.escudo = escudo;
    }   
}