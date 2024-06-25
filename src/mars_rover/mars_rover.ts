export class Rover {
  x_pos: number;
  y_pos: number;
  direction: string;
  constructor(x_pos: number, y_pos: number, direction: string) {
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.direction = direction;
  }
}
