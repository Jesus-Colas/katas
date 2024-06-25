import { Rover } from "./mars_rover";

test("create stores position and direction", () => {
  const x_pos = 0;
  const y_pos = 0;
  const direction = "N";
  const rover = new Rover(x_pos, y_pos, direction);
  expect(rover.x_pos).toEqual(x_pos);
  expect(rover.y_pos).toEqual(y_pos);
  expect(rover.direction).toEqual(direction);
});
