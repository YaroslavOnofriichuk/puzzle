export type MatrixCell = {
    color: string,
    id: string,
    active: boolean,
}

export type Matrix = Array<Array<MatrixCell>>

export type Figure = {
    id: number,
    color?: string,
    map: Array<Array<0 | 1 | 2>>,
}