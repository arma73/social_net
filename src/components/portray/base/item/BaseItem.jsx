import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { PICK_PHOTO_ROUTE } from "_settings/routes";
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
}) => {
    const location = useLocation();

    return (
        <div className={clsx(item, { [transparent]: view.empty })}>
            {
                !view.empty && (
                    <Link
                        to={{
                            "pathname": `${PICK_PHOTO_ROUTE}${content.id}`,
                            "state": { "from": location }
                        }}
                    >
                        <div
                            className={wrapp}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Img
                                src={`/public/assets/images/gallery/${content.fileName}`}
                                component="img"
                                style={{ "objectFit": "cover" }}
                            />
                            <HoverItem
                                isHover={isHover}
                                numComments={0}
                                numPreviewLikes={0}
                            />
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default onHover(BaseItem);
