import { Command } from './command/command';

export class Controller {
  public commands: Command[] = [];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(commandIdx: number) {
    this.commands[commandIdx].execute();
  }
}
