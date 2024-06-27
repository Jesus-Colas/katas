import { Rover } from "./mars_rover";
import { Point } from "./point";

test("create stores position and direction", () => {
  const x_pos = 0;
  const y_pos = 0;
  const starting_point = new Point(x_pos, y_pos);
  const direction = "N";
  const rover = new Rover(starting_point, direction);
  expect(rover.starting_point).toEqual(starting_point);
  expect(rover.direction).toEqual(direction);
});
