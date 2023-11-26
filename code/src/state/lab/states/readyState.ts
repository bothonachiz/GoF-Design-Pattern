import { GashaponCapsule } from '../gashaponCapsule';
import { GashaponMachine } from '../gashaponMachine';
import { GashaponMachineState } from '../gashaponMachineState';
import { GashaponState } from './gashaponState';

export class ReadyState implements GashaponState {
  private gashaponMachine: GashaponMachine;

  constructor(gashaponMachine: GashaponMachine) {
    this.gashaponMachine = gashaponMachine;
  }

  insertCoin(): void {
    let currentCoins = this.gashaponMachine.getCoins();
    this.gashaponMachine.setCoins(++currentCoins);
    this.gashaponMachine.setState(GashaponMachineState.hasCoin);
  }

  ejectCoins(): number {
    throw new Error("You haven't insert any coin");
  }

  spin(): GashaponCapsule {
    throw new Error('Please insert more coin');
  }
}
