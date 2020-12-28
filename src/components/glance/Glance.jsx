import BaseRow from "_components/portray/base";
import GridItems from "_components/portray/grid";
import MixedItems from "_components/portray/mixed";
import convertObjectToGroups from "_utils/convertObjectToGroups";

import { basePortray, gridPortray, mixedPortray } from "./style.m.css";

const PortrayBase = ({ content }) => {
    const mapRows = () =>
        convertObjectToGroups(content, 3).map(item => <BaseRow content={item} key={String(item)} />);

    return (
        <article className={basePortray}>
            {mapRows()}
        </article>
    );
};

const PortrayGrid = ({ content }) => (
    <div className={gridPortray}>
        <GridItems content={content} />
    </div>
);

const PortrayMixed = ({ content }) => (
    <div className={mixedPortray}>
        <MixedItems content={content} />
    </div>  
);

const Glance = ({ view = "base", content }) => {
    switch (view) {
        case "base":
            return <PortrayBase content={content} />;
        case "grid":
            return <PortrayGrid content={content} />;
        case "mixed":
            return <PortrayMixed content={content} />;
        default:
            return <PortrayBase content={content} />;
    }
};

export default Glance;
