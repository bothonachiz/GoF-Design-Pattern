import { GashaponCapsule } from './gashaponCapsule';
import { GashaponMachine } from './gashaponMachine';
import { GashaponMachineState } from './gashaponMachineState';

describe('GashaponMachine', () => {
  it('should be out of capsule when initial gashapon machine', () => {
    const machine = new GashaponMachine();

    expect(machine.getState()).toEqual(GashaponMachineState.outOfCapsule);
  });

  it('should be ready state when reload capsule', () => {
    const machine = new GashaponMachine();

    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    expect(machine.getState()).toEqual(GashaponMachineState.ready);
    expect(machine.getCapsules().length).toEqual(2);
  });

  it('should be hasCoin state when insert coin', () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    machine.insertCoin();
    expect(machine.getState()).toEqual(GashaponMachineState.hasCoin);

    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    expect(machine.getState()).toEqual(GashaponMachineState.readyToSpin);
  });

  it("should be error when eject coins but doesn't insert any coin", () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    expect(() => machine.ejectCoins()).toThrowError(
      "You haven't insert any coin"
    );
  });

  it("should be error when spin but doesn't insert any coin", () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    expect(() => machine.spin()).toThrowError('Please insert more coin');
  });

  it('should be error when insert more than need coins', () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    expect(machine.getState()).toEqual(GashaponMachineState.readyToSpin);

    expect(() => machine.insertCoin()).toThrowError(
      'Cannot insert coin when ready to spin'
    );
  });

  it('should return Luffy when insert 4 coins and spin the machine', () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Luffy'), new GashaponCapsule('Nami')]);

    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    const capsule = machine.spin();

    expect(capsule?.getToy()).toEqual('Luffy');
    expect(machine.getState()).toEqual(GashaponMachineState.ready);
  });

  it('should be out of capsule when spin last capsule from the machine', () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Nami')]);

    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    const capsule = machine.spin();

    expect(capsule?.getToy()).toEqual('Nami');
    expect(machine.getState()).toEqual(GashaponMachineState.outOfCapsule);
  });

  it("should be error when machine doesn't have any capsule but machine let user spin", () => {
    const machine = new GashaponMachine();
    machine.reload([new GashaponCapsule('Nami')]);
    machine.setCapsules([]);
    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();
    machine.insertCoin();

    expect(() => machine.spin()).toThrowError("The machine has some problem. Please eject coins.");
  });
});
