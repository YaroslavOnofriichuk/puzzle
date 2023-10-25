import "./Cell.scss";
import { MATRIX_SIZE } from "../../service";
import type { MatrixCell } from "../../types";

export const Cell = ({color, border, id}: MatrixCell): JSX.Element => {
    const onDrop = (e) => {
        console.log("onDrop", e)
    }
    return <div 
            className={`cell ${color} ${border ? "border" : ""}`}
            style={{ 
                width: `calc(100% / ${MATRIX_SIZE})`,
                height: `calc(100% / ${MATRIX_SIZE})`,
            }}
            id={id}
            onDrop={onDrop}
        >
    </div>
}