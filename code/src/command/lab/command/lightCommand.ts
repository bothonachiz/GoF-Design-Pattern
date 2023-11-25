import { Light } from '../devices';
import { Command } from './command';

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }
}
