import Items from "./items";
import { mix } from "./style.m.css";

const MixedRow = ({ content }) => (
    <div className={mix}>
        <Items content={content} />
    </div>  
);

export default MixedRow;
