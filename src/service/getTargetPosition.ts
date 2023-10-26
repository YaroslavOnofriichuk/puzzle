import { MATRIX_SIZE } from "./consts";

export const getTargetPosition = (x: number, y: number, width: number): number[] => {
    const cellSize = width / MATRIX_SIZE;
    let xPosition = Math.ceil(x / cellSize);
    let yPosition = Math.ceil(y / cellSize);
    xPosition = xPosition < 1 ? 1 : xPosition;
    xPosition = xPosition > MATRIX_SIZE ? MATRIX_SIZE : xPosition;
    yPosition = yPosition < 1 ? 1 : yPosition;
    yPosition = yPosition > MATRIX_SIZE ? MATRIX_SIZE : yPosition;
    return [xPosition - 1, yPosition - 1];
};