import BaseIcon from "_theme/icons/baseGrid.svg";
import GridIcon from "_theme/icons/grid.svg";
import MixedIcon from "_theme/icons/mixed.svg";
import { list, item, active, target, targetText } from "./style.m.css";

const TargetGlance = ({ currentActive = "base", onClick }) => {
    const mapList = () => [
        { "name": "base", "icon": { "component": BaseIcon, "viewBox": "0 0 68 85" } }, 
        { "name": "grid", "icon": { "component": GridIcon, "viewBox": "0 0 68 85" } },
        { "name": "mixed", "icon": { "component": MixedIcon, "viewBox": "0 0 100 125" } }
    ].map(({ name, "icon": { "component": Icon, viewBox } }) => (
        <li key={name} className={item} onClick={() => onClick(name)}> 
            <span className={`${target} ${currentActive === name ? active : ""}`}> 
                <Icon width="22px" height="22px" viewBox={viewBox} />
                <span className={targetText}> {name} </span>
            </span>
        </li>
    ));

    return (
        <ul className={list}>
            {mapList()}
        </ul>
    );
};

export default TargetGlance;
