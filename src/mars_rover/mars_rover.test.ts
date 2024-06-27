import { Rover } from "./mars_rover";
import { Point } from "./point";

describe("MarsRover", () => {
  const x_pos: number = 0;
  const y_pos: number = 0;
  const starting_point: Point = new Point(x_pos, y_pos);
  const direction: string = "N";
  let rover: Rover;
  beforeEach((): void => {
    rover = new Rover(starting_point, direction);
  });

  test("create stores position and direction", () => {
    expect(rover.starting_point).toEqual(starting_point);
    expect(rover.direction).toEqual(direction);
  });

  test("The rover receives a character array of commands", () => {
    const commands: string[] = [];
    expect(rover.commands(commands)).toEqual("ack");
  });
});
