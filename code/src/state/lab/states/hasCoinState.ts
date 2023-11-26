import { GashaponCapsule } from '../gashaponCapsule';
import { GashaponMachine } from '../gashaponMachine';
import { GashaponMachineState } from '../gashaponMachineState';
import { GashaponState } from './gashaponState';

export class HasCoinState implements GashaponState {
  private gashaponMachine: GashaponMachine;

  constructor(gashaponMachine: GashaponMachine) {
    this.gashaponMachine = gashaponMachine;
  }

  insertCoin(): void {
    let currentCoins = this.gashaponMachine.getCoins();
    this.gashaponMachine.setCoins(++currentCoins);

    if (this.gashaponMachine.getCoins() == this.gashaponMachine.getNeedCoins())
      this.gashaponMachine.setState(GashaponMachineState.readyToSpin);
  }

  ejectCoins(): number {
    this.gashaponMachine.setState(GashaponMachineState.ready);
    const currentCoins = this.gashaponMachine.getCoins();
    this.gashaponMachine.setCoins(0);

    return currentCoins;
  }

  spin(): GashaponCapsule {
    throw new Error('Please insert more coin');
  }
}
