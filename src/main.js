import { Impuestos } from "./Impuestos.js";
import { Cliente } from "./Cliente.js";

let impuesto = new Impuestos(2500, 120);

let cliente = new Cliente("Sr_Pepito");

cliente.impuesto = impuesto;

console.log(impuesto.montoBrutoAnual);
console.log(cliente.calcularImpuesto());
