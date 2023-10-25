import { DragEvent, useState, useEffect } from "react";
import "./Game.scss";
import { Cell } from "../Cell";
import { generateMatrix } from "../../service";
import type { Matrix, MatrixCell } from "../../types";
import { MATRIX_SIZE } from "../../service";
import Draggable from 'react-draggable';

export const Game = (): JSX.Element => {
    const [matrix] = useState<Matrix>(generateMatrix());
    const [target, setTarget] = useState<MatrixCell | null>(null);
    let targetId: string

    useEffect(() => {
      console.log(target)
    }, [target])
    

    const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (event.target.id) {
            targetId = event.target.id;
        }
    };

    const handleStop = (e) => {
        console.log("==========", e)
    }

    return  <>
        <div 
            className="game"
            onDragEnter={handleDragEnter}
        >
            {matrix.map((col, index) => (
                <div 
                    key={index}
                    className="column"
                    style={{ width: `calc(100% / ${MATRIX_SIZE})`}}
                > 
                    {col.map((row) => (
                        <Cell 
                            id={row.id} 
                            key={row.id} 
                            color={row.color} 
                            border={row.border}
                        />
                    ))}
                </div>
            ))}
        </div>

        <Draggable

            grid={[8, 8]}
            scale={1}
            onStop={handleStop}
        >
           <div
            style={{
                width: "100px", 
                height: "100px", 
                backgroundColor: "blue",
                cursor: "pointer",
            }}
        >
        </div>
        </Draggable>
    
    </>
}