import type { Figure } from "../types";

export const MATRIX_SIZE: number = 8;

export const COLORS: string[] = [
    "red",
    "blue",
    "green",
    "yellow",
];

export const FIGURES: Figure[] = [
    { id: 1, map: [[0], [0], [0, 1, 2], []] },
    { id: 2, map: [[0], [0], [0]] },
    { id: 3, map: [[0, 1, 2], [], []] },
];