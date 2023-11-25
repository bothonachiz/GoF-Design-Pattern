import {
  GarageDoorDownCommand,
  GarageDoorLightOffCommand,
  GarageDoorLightOnCommand,
  GarageDoorStopCommand,
  GarageDoorUpCommand,
} from './command/garageDoorCommand';
import { LightOffCommand, LightOnCommand } from './command/lightCommand';
import { Controller } from './controller';
import { GarageDoor, Light } from './devices';

describe('[Command - lab] Controller', () => {
  it('should execute turn light on/off device', () => {
    // given
    const lightDevice = new Light();
    lightDevice.on = jest.fn();
    lightDevice.off = jest.fn();
    const lightOnCommand = new LightOnCommand(lightDevice);
    const lightOffCommand = new LightOffCommand(lightDevice);
    const controller = new Controller([lightOnCommand, lightOffCommand]);

    controller.execute(0);
    expect(lightDevice.on).toBeCalledTimes(1);

    controller.execute(1);
    expect(lightDevice.off).toBeCalledTimes(1);
  });

  it('should execute garage door command', () => {
    const garageDoorDevice = new GarageDoor();
    garageDoorDevice.up = jest.fn();
    garageDoorDevice.down = jest.fn();
    garageDoorDevice.stop = jest.fn();
    garageDoorDevice.lightOn = jest.fn();
    garageDoorDevice.lightOff = jest.fn();
    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoorDevice);
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoorDevice);
    const garageDoorStopCommand = new GarageDoorStopCommand(garageDoorDevice);
    const garageDoorLightOnCommand = new GarageDoorLightOnCommand(
      garageDoorDevice
    );
    const garageDoorLightOffCommand = new GarageDoorLightOffCommand(
      garageDoorDevice
    );
    const controller = new Controller([
      garageDoorUpCommand,
      garageDoorDownCommand,
      garageDoorStopCommand,
      garageDoorLightOnCommand,
      garageDoorLightOffCommand,
    ]);

    controller.execute(0);
    expect(garageDoorDevice.up).toHaveBeenCalledTimes(1);

    controller.execute(1);
    expect(garageDoorDevice.down).toHaveBeenCalledTimes(1);

    controller.execute(2);
    expect(garageDoorDevice.stop).toHaveBeenCalledTimes(1);

    controller.execute(3);
    expect(garageDoorDevice.lightOn).toHaveBeenCalledTimes(1);

    controller.execute(4);
    expect(garageDoorDevice.lightOff).toHaveBeenCalledTimes(1);
  });
});
