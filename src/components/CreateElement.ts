const createElement = (obj: any, color: string) => {
  const posX = obj.x;
  const posY = obj.y;
  const elem = document.createElement('div');
  elem.style.cssText = `background-color: ${color}; border: 1px solid white; height: 5px; width: 5px; position: absolute;`;
  elem.style.left = posX + "px";
  elem.style.top = posY + "px";

  return elem;
};

export default createElement;

