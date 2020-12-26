import Item from "./item";

import { row } from "./style.m.css";

const BaseRow = ({ content }) => {
    const mapItems = () => content.map(
        item => 
            <Item 
                content={item} 
                key={item.empty ? item.id : String(item)}
                onHover={() => console.log("hover")}
                view={{
                    "empty": !!item.empty,
                }}
            />
    ); 

    return (
        <div className={row}>
            {mapItems()}
        </div>
    );
};

export default BaseRow;
