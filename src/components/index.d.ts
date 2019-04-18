declare interface IPoint {
  move: (offset: number, direction: any) => void,
  render: () => HTMLDivElement,
}

declare interface IFood {
  isEaten: (item: IPoint) => boolean,
  render: () => HTMLDivElement,
}

declare interface ISnake {
  addItem: () => number,
  getLastItem: () => IPoint,
  init: () => void,
  initSnakeList: (length: number) => Array<IPoint>,
  move: () => boolean,
}

declare interface IGame {
  init: () => void,
}