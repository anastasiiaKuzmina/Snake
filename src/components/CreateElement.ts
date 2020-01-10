import { ctx } from './Constants';

const createElement = (x: number, y: number, color: string) => {
  const posX = x;
  const posY = y;
  const width = 5;
  const height = 5;

  ctx.beginPath();
  ctx.strokeStyle  = 'white';
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, width, height);
  ctx.stroke();
  ctx.closePath();
};

export default createElement;

