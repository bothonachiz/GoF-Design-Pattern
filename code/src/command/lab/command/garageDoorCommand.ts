import { GarageDoor } from '../devices';
import { Command } from './command';

export class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }
}

export class GarageDoorDownCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.down();
  }
}

export class GarageDoorStopCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.stop();
  }
}

export class GarageDoorLightOnCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.lightOn();
  }
}

export class GarageDoorLightOffCommand implements Command {
  garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute() {
    this.garageDoor.lightOff();
  }
}
