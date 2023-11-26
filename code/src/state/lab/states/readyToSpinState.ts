import { GashaponCapsule } from '../gashaponCapsule';
import { GashaponMachine } from '../gashaponMachine';
import { GashaponMachineState } from '../gashaponMachineState';
import { GashaponState } from './gashaponState';

export class ReadyToSpinState implements GashaponState {
  private gashaponMachine: GashaponMachine;

  constructor(gashaponMachine: GashaponMachine) {
    this.gashaponMachine = gashaponMachine;
  }

  insertCoin(): void {
    throw new Error('Cannot insert coin when ready to spin');
  }

  ejectCoins(): number {
    this.gashaponMachine.setState(GashaponMachineState.ready);
    const currentCoins = this.gashaponMachine.getCoins();
    this.gashaponMachine.setCoins(0);

    return currentCoins;
  }

  spin(): GashaponCapsule {
    this.gashaponMachine.setCoins(0);
    const capsule = this.gashaponMachine.getCapsules().shift();

    if (capsule) {
      const remainCapsules = this.gashaponMachine.getCapsules().length;

      if (remainCapsules == 0) {
        this.gashaponMachine.setState(GashaponMachineState.outOfCapsule);
      } else {
        this.gashaponMachine.setState(GashaponMachineState.ready);
      }
      return capsule;
    }

    throw new Error('The machine has some problem. Please eject coins.');
  }
}
