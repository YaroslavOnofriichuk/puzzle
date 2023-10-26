import { COLORS } from "./consts";
import { random } from "./generateRandomNumber";

export const getRandomColor = () => {
    return COLORS[random(0, 3)];
};