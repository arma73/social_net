import clsx from "clsx";
import Img from "_components/img";

import { item, transparent, wrapp } from "./style.m.css";

const BaseItem = ({ content, view }) => (
    <div className={clsx(item, { [transparent]: view.empty })}>
        {
            !view.empty && (
                <div className={wrapp}> 
                    <Img 
                        src={`public/assets/images/gallery/${content.fileName}`} 
                        component="img"
                        style={{ "objectFit": "cover" }}
                    />
                </div>
            )
        }
    </div>
);

export default BaseItem;
