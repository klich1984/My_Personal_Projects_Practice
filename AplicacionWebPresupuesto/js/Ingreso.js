/* Cada elemento de la lista necesita tener un identificador unico */

class Ingreso extends Dato {
  static contadorIngresos = 0

  constructor(description, value){
    super(description, value)
    this._idIngreso = ++Ingreso.contadorIngresos
  }

  get id(){
    return this._idIngreso
  }
}
