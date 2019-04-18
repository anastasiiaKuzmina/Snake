declare interface IPoint {
  move: (offset: number, direction: any) => void,
  render: () => HTMLDivElement,
}

declare interface IFood {
  isEaten: (item: any) => boolean,
  render: () => HTMLDivElement,
}

declare interface ISnake {
  addItem: () => Array,
  getLastItem: () => Object,
  init: () => void,
  initSnakeList: (length: number) => Object,
  move: () => boolean,
}

declare interface IGame {
  init: () => void,
}