import BaseRow from "_components/portray/base";
import GridItems from "_components/portray/grid";
import MixedItems from "_components/portray/mixed";
import convertObjectToGroups from "_utils/convertObjectToGroups";

import { baseGrid, grid, mixed } from "./style.m.css";

const BaseGrid = ({ content }) => {
    const mapRows = () =>
        convertObjectToGroups(content, 3).map(item => <BaseRow content={item} key={String(item)} />);

    return (
        <article className={baseGrid}>
            {mapRows()}
        </article>
    );
};

const Grid = ({ content }) => (
    <div className={grid}>
        <GridItems content={content} />
    </div>
);

const Mixed = ({ content }) => (
    <div className={mixed}>
        <MixedItems content={content} />
    </div>  
);

const Glance = ({ view = "base", content }) => {
    switch (view) {
        case "base":
            return <BaseGrid content={content} />;
        case "grid":
            return <Grid content={content} />;
        case "mixed":
            return <Mixed content={content} />;
        default:
            return <BaseGrid content={content} />;
    }
};

export default Glance;
