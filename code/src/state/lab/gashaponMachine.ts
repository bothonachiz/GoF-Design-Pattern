import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachineState } from './gashaponMachineState';
import { GashaponState } from './states/gashaponState';
import { HasCoinState } from './states/hasCoinState';
import { ReadyState } from './states/readyState';
import { ReadyToSpinState } from './states/readyToSpinState';

export class GashaponMachine {
  private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
  private machineState: GashaponState | undefined;
  private coins: number = 0;
  private needCoins: number = 4;
  private capsules: GashaponCapsule[] = [];

  getCoins(): number {
    return this.coins;
  }

  setCoins(coins: number): void {
    this.coins = coins;
  }

  getNeedCoins(): number {
    return this.needCoins;
  }

  setState(state: GashaponMachineState): void {
    this.state = state;
    if (this.state == GashaponMachineState.ready) {
      this.machineState = new ReadyState(this);
    } else if (this.state == GashaponMachineState.hasCoin) {
      this.machineState = new HasCoinState(this);
    } else if (this.state == GashaponMachineState.readyToSpin) {
      this.machineState = new ReadyToSpinState(this);
    }
  }

  getState(): GashaponMachineState {
    return this.state;
  }

  reload(capsules: GashaponCapsule[]): void {
    this.setCapsules([...this.capsules, ...capsules]);
    this.setState(GashaponMachineState.ready);
  }

  getCapsules(): GashaponCapsule[] {
    return this.capsules;
  }

  setCapsules(capsules: GashaponCapsule[]): void {
    this.capsules = capsules;
  }

  insertCoin(): void {
    this.machineState?.insertCoin();
  }

  ejectCoins(): number {
    return this.machineState?.ejectCoins() || 0;
  }

  spin(): GashaponCapsule | undefined {
    return this.machineState?.spin() || undefined;
  }
}
