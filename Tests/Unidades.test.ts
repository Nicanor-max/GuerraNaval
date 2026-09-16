import { describe, expect, test } from "vitest";

import { Pistola } from "../Guerra/Armas/Pistola.js";
import { Escudo } from "../Guerra/Escudo/Escudo.js";

import { Soldado } from "../Guerra/Combate/Soldado.js";
import { Tanque } from "../Guerra/Combate/Tanque.js";
import { Buque } from "../Guerra/Combate/Buque.js";


describe("Soldado", () => {

  test("debe comenzar vivo", () => {
    const soldado = new Soldado(new Pistola(10));

    expect(soldado.estaVivo()).toBe(true);
  });

  test("debe morir con un disparo", () => {
    const atacante = new Soldado(new Pistola(10));
    const soldado = new Soldado(new Pistola(10));

    atacante.disparar(soldado);

    expect(soldado.estaVivo()).toBe(false);
  });

});


describe("Tanque", () => {

  test("debe comenzar vivo", () => {
    const tanque = new Tanque(new Pistola(10));

    expect(tanque.estaVivo()).toBe(true);
  });

  test("debe sobrevivir a un disparo", () => {
    const atacante = new Soldado(new Pistola(10));
    const tanque = new Tanque(new Pistola(10));

    atacante.disparar(tanque);

    expect(tanque.estaVivo()).toBe(true);
  });

  test("debe morir con dos disparos", () => {
    const atacante = new Soldado(new Pistola(10));
    const tanque = new Tanque(new Pistola(10));

    atacante.disparar(tanque);
    atacante.disparar(tanque);

    expect(tanque.estaVivo()).toBe(false);
  });

});


describe("Buque", () => {

  test("debe comenzar vivo", () => {
    const buque = new Buque(new Pistola(10));

    expect(buque.estaVivo()).toBe(true);
  });

  test("debe sobrevivir a dos disparos", () => {
    const atacante = new Soldado(new Pistola(10));
    const buque = new Buque(new Pistola(10));

    atacante.disparar(buque);
    atacante.disparar(buque);

    expect(buque.estaVivo()).toBe(true);
  });

  test("debe morir con tres disparos", () => {
    const atacante = new Soldado(new Pistola(10));
    const buque = new Buque(new Pistola(10));

    atacante.disparar(buque);
    atacante.disparar(buque);
    atacante.disparar(buque);

    expect(buque.estaVivo()).toBe(false);
  });

});


describe("Unidades con escudo", () => {

  test("un escudo de 50% debe reducir el daño recibido", () => {
    const atacante = new Soldado(new Pistola(10));
    const tanque = new Tanque(new Pistola(10));

    tanque.equiparEscudo(new Escudo(50));

    atacante.disparar(tanque);

    expect(tanque.getVida()).toBe(1.5);
  });

  test("una unidad con escudo de 100% no debe recibir daño", () => {
    const atacante = new Soldado(new Pistola(10));
    const tanque = new Tanque(new Pistola(10));

    tanque.equiparEscudo(new Escudo(100));

    atacante.disparar(tanque);

    expect(tanque.getVida()).toBe(2);
  });

});