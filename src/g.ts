function doSomething1(a: number) {
  console.log("hi " + a);
}

doSomething1(122);

enum Direction {
  Up,
  Down,
  Right,
  Left,
}
function Game(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
    console.log("Up Bro");
  } else if (keyPressed == Direction.Down) {
    console.log("Down ");
  } else if (keyPressed == Direction.Left) {
    console.log("Right or Left");
  } else {
    console.log("Left");
  }
}

Game(Direction.Up);
