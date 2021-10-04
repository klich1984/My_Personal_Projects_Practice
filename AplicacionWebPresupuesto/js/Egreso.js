/* Cada elemento de la lista necesita tener un identificador unico */

class Egreso extends Dato {
  static contadorEgresos = 0

  constructor(description, value){
    super(description, value)
    this._idEgreso = ++Egreso.contadorEgresos
  }

  get id(){
    return this._idEgreso
  }
}
