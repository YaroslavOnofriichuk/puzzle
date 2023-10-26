import { MATRIX_SIZE } from "./consts";
import type { Matrix } from "../types";

export const generateMatrix = (): Matrix => {
    const matrix: Matrix = [];

    for (let i = 0; i < MATRIX_SIZE; i++) {
        matrix.push([])
        for (let k = 0; k < MATRIX_SIZE; k++) {
            matrix[i][k] = {
                id: `${i}${k}`,
                color: "transparent",
                active: false,
            };
            
        }
    }
    return matrix;
};