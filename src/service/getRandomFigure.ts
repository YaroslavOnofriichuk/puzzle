import { FIGURES } from "./consts";
import { random } from "./generateRandomNumber";
import { getRandomColor } from "./getRandomColor";
import type { Figure } from "../types";

export const getRandomFigure = (): Figure => {
    const figure = FIGURES[random(0, 2)];
    figure.color = getRandomColor();
    figure.id = random(0, 100);
    return figure;
};