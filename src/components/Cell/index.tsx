import "./Cell.scss";
import type { MatrixCell } from "../../types";

interface CellProps extends MatrixCell {
    cellWidth: number,
}

export const Cell = ({color, active, id, cellWidth}: CellProps): JSX.Element => {
    return <div 
            className={`cell ${color} ${active ? "active" : ""}`}
            style={{ width: cellWidth, height: cellWidth }}
            id={id}
        >
    </div>
}