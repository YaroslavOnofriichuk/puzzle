import { Figure } from "../types";

export const generateMap = (figure: Figure): Array<Array<boolean>> => {
    const map: Array<Array<boolean>> = [];

    for (let i = 0; i < 3; i++) {
        map.push([])
        for (let k = 0; k < 3; k++) {
            map[i][k] = figure.map[i][k] !== undefined;
            
        }
    }
    return map;
};