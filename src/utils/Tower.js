import Stack from "./Stack";
import deepCopy from "../helpers/deepCopy";

class Tower {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.length = 0;
    this.disks = new Stack();
  }
  add(value) {
    this.disks.push(value);
    this.length++;
    return this;
  }

  moveTopTo(destination) {
    if (destination.add(this.disks.top.value)) {
      this.disks.pop();
      destination.setTower(deepCopy(destination));
      this.setTower(deepCopy(this));
      return this;
    } else {
      return false;
    }
  }

  *moveDisks(disks, towerDestination, towerAux) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      yield this.moveTopTo(towerDestination);
    }
    if (disks >= 2) {
      yield* this.moveDisks(disks - 1, towerAux, towerDestination);
      yield this.moveTopTo(towerDestination);
      yield* towerAux.moveDisks(disks - 1, towerDestination, this);
    }
    return true;
  }
}

export default Tower;
