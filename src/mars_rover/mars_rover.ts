import { Point } from "./point";

export class Rover {
  starting_point: Point;
  direction: string;
  constructor(starting_point: Point, direction: string) {
    this.starting_point = starting_point;
    this.direction = direction;
  }

  commands(commands: any[]): string {
    return "ack";
  }
}
