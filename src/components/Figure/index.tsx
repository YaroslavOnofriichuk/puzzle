import { DragEvent } from "react";
import { Figure as FigureType } from "../../types";
import { generateMap } from "../../service";
import "./Figure.scss";

interface FigureProps {
    figure: FigureType,
    cellWidth: number,
    onDragEnd: (x: number, y: number, figure: FigureType) => void,
}

export const Figure = ({ figure, cellWidth, onDragEnd }: FigureProps): JSX.Element => {

    const handleDragEnd = (event: DragEvent<HTMLDivElement>) => {
        onDragEnd(event.pageX, event.pageY, figure);
    };

    const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
        console.log("handleDragStart", event)
    };

    return  <div 
                className="figure" 
                draggable={true}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
        {generateMap(figure).map((col, index) => (
            <div key={index} className="figure-column">
                {col.map((row, rowIndex) => (
                    <div 
                        key={index + rowIndex}
                        className={`figure-cell ${row ? figure.color : ""}`}
                        style={{ width: cellWidth, height: cellWidth }}
                    >
                    </div>
                ))}
            </div>
        ))}
    </div>
};