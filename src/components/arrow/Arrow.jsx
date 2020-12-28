import IconArrow from "_theme/icons/arrow.svg";

import { arrow, block, arrowsIcons, prevIcon, nextIcon } from "./style.m.css";

const Arrow = ({ nextPick, previousPick }) => (
    <div className={arrow}>
        <div className={block}>
            <div className={arrowsIcons}>
                <IconArrow
                    width="40px"
                    height="40px"
                    fill="#fff"
                    className={prevIcon}
                    onClick={previousPick}
                />
                <IconArrow
                    width="40px"
                    height="40px"
                    fill="#fff"
                    className={nextIcon}
                    onClick={nextPick}
                />
            </div>
        </div>
    </div>
);

export default Arrow;
