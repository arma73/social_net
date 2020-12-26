import LikeIcon from "_theme/icons/like.svg";
import CommentsIcon from "_theme/icons/comments.svg";

import { hover, icon } from "./style.m.css";

const HoverItem = ({ isHover, numComments, numPreviewLikes }) => {
    if (!isHover) return null;

    return (
        <div className={hover}>
            <ul>
                <li>
                    <span> {numComments} </span>
                    <span>
                        <LikeIcon
                            width="19px"
                            height="19px"
                            fill="#fff"
                            className={icon}
                        />
                    </span>
                </li>
                <li>
                    <span> {numPreviewLikes} </span>
                    <span>
                        <CommentsIcon
                            width="19px"
                            height="19px"
                            fill="#fff"
                            className={icon}
                        />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default HoverItem;
