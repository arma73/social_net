import Items from "./items";
import { grid } from "./style.m.css";

const GridRow = ({ content }) => (
    <div className={grid}>
        <Items content={content} />
    </div>
);

export default GridRow;
