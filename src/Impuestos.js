export class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  set montoBrutoAnual(montoBrutoAnual) {
    this._montoBrutoAnual = montoBrutoAnual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(deducciones) {
    this._deducciones = deducciones;
  }
}
