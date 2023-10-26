import { useState, useEffect } from "react";
import "./Game.scss";
import { Cell } from "../Cell";
import { Figure } from "../Figure";
import { generateMatrix, getRandomFigure, getTargetPosition } from "../../service";
import type { Matrix, Figure as FigureType } from "../../types";
import { MATRIX_SIZE } from "../../service";

interface GameProps {
    containerWidth: number,
}

export const Game = ({ containerWidth }: GameProps): JSX.Element => {
    const [cellWidth, setCellWidth] = useState(0);
    const [matrix, setMatrix] = useState<Matrix>(generateMatrix());
    const [figures, setFigures] = useState<FigureType[]>([getRandomFigure(), getRandomFigure()]);

    useEffect(() => {
      setCellWidth(containerWidth / MATRIX_SIZE);
    }, [containerWidth])

    const handleDragEnd = (x: number, y: number, figure: FigureType) => {
        const position = getTargetPosition(x, y, containerWidth);
        console.log("position", position)
        console.log("figures", figures)
        const newMatrix = [...matrix];
        newMatrix[position[0]][position[1]].active = true;
        newMatrix[position[0]][position[1]].color = figure.color || "transparent";
        const newFigures = figures.filter(fig => fig.id !== figure.id);
        console.log("newFigures", newFigures)
        setMatrix(newMatrix);
        if (newFigures.length === 0) {
            setFigures([getRandomFigure(), getRandomFigure()]);
        } else {
            setFigures(newFigures);
        }
    };

    return  <>
        <div 
            className="game"
            style={{ width: containerWidth, height: containerWidth }}
        >
            {matrix.map((col, index) => (
                <div 
                    key={index}
                    className="column"
                > 
                    {col.map((row) => (
                        <Cell 
                            id={row.id} 
                            key={row.id} 
                            color={row.color} 
                            active={row.active}
                            cellWidth={cellWidth}
                        />
                    ))}
                </div>
            ))}
        </div>

        <div 
            className="figures-container"
            style={{ width: containerWidth }}
        >   
            {figures.map(figure => (
                <Figure 
                    key={figure.id}
                    figure={figure} 
                    cellWidth={cellWidth} 
                    onDragEnd={handleDragEnd}
                />
            ))}
        </div>
    </>
}