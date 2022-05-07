import Stack from "./Stack";

class Tower {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.length = 0;
    this.disks = new Stack();
  }
  //! servirá para agregar un disco a la torre → (un nuevo nodo a la pila)
  //! pero debes de tener en cuenta la siguiente regla “Un disco no puede
  //! mover encima de un disco más pequeño”
  add(value) {
    this.disks.push(value);
    this.length++;
    return this;
  }

  //!deberá de mover el disco que se encuentra en la cima de la torre actual
  //!(this) hacía la torre de destino (towerDestination) para esto deberás de
  //!comprobar que pueda moverse hacía la torre de destino y después quitar el
  //! disco de la torre de origen.
  moveTopTo(destination) {
    if (
      destination.disks.top === null ||
      this.disks.top.value < destination.disks.top.value
    ) {
      destination.disks.push(this.disks.top.value);
      destination.length ++
      this.length --
      this.disks.pop();
      return true;
    }
  }
  //! será el método recursivo que resolverá el juego de la torre de Hanoi,
  //! este método será útil para el botón “resolver”. Este método deberá
  //! usar el método moveTopTo para mover todos los discos de la torre no.
  //! 1 hacía la torre no.3 de forma recursiva.
  moveDisks(disks, towerOne, towerTwo, towerThree) {
    if (disks ===1){
      towerOne.moveTopTo(towerThree)
    }
    return true
  }
}

export default Tower;
