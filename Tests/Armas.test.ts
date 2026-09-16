import { describe, expect, test } from "vitest";
import { Pistola } from "../Guerra/Armas/Pistola.js";
import { Ametralladora } from "../Guerra/Armas/Ametralladora.js";

describe("Pistola", () => {

  test("debe comenzar con las municiones indicadas", () => {
    const pistola = new Pistola(5);

    expect(pistola.getMuniciones()).toBe(5);
  });

  test("debe descontar una municion al disparar", () => {
    const pistola = new Pistola(5);

    pistola.disparar();

    expect(pistola.getMuniciones()).toBe(4);
  });

  test("debe hacer 1 de daño", () => {
    const pistola = new Pistola(5);

    expect(pistola.disparar()).toBe(1);
  });

  test("sin municiones no debe hacer daño", () => {
    const pistola = new Pistola(0);

    expect(pistola.disparar()).toBe(0);
  });

});


describe("Ametralladora", () => {

  test("debe comenzar con las municiones indicadas", () => {
    const rifle = new Ametralladora(5);

    expect(rifle.getMuniciones()).toBe(5);
  });

  test("debe descontar una municion al disparar", () => {
    const rifle = new Ametralladora(5);

    rifle.disparar();

    expect(rifle.getMuniciones()).toBe(4);
  });

  test("debe hacer 2 de daño", () => {
    const rifle = new Ametralladora(5);

    expect(rifle.disparar()).toBe(2);
  });

  test("sin municiones no debe hacer daño", () => {
    const rifle = new Ametralladora(0);

    expect(rifle.disparar()).toBe(0);
  });

});