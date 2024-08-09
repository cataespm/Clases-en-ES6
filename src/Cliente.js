import { Impuestos } from "./Impuestos.js";

export class Cliente {
  #nombre;
  impuesto = new Impuestos();

  constructor(nombre) {
    this.#nombre = nombre;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  calcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}
