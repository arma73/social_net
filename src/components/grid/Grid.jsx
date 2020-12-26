import BaseRow from "_components/row/base";
import GridRow from "_components/row/grid";
import MixedRow from "_components/row/mixed";
import convertObjectToGroups from "_utils/convertObjectToGroups";

import { grid } from "./style.m.css";

const Grid = ({ view = "base", content }) => {
    const mapRows = () => {
        switch (view) {
            case "base":
                return convertObjectToGroups(content, 3).map(item =>  <BaseRow content={item} key={String(item)} />);
            case "grid":
                return <GridRow content={content} />;
            case "mixed":
                return <MixedRow content={content} />;
            default: 
                return convertObjectToGroups(content, 3).map(item =>  <BaseRow content={item} key={String(item)} />);
        }
    };

    return (
        <article className={grid}>
            {mapRows()}
        </article>
    );
};

export default Grid;
