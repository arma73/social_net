import clsx from "clsx";
import onHover from "_containers/hoc/onHover";
import HoverItem from "./hover";
import Img from "_components/img";

import { item, transparent, wrapp } from "./style.m.css";

const BaseItem = ({
    content,
    view,
    isHover,
    onMouseEnter,
    onMouseLeave
}) => (
    <div className={clsx(item, { [transparent]: view.empty })}>
        {
            !view.empty && (
                <div
                    className={wrapp}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Img
                        src={`public/assets/images/gallery/${content.fileName}`}
                        component="img"
                        style={{ "objectFit": "cover" }}
                    />
                    <HoverItem
                        isHover={isHover}
                        numComments={0}
                        numPreviewLikes={0}
                    />
                </div>
            )
        }
    </div>
);

export default onHover(BaseItem);
