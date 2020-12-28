import Img from "_components/img";
import random from "_utils/random";

import { item, itemWide, itemTall, itemBig, img } from "./style.m.css";

const MixedItems = ({ className, content }) => {
    const mapItems = () => {
        const sizes = ["", itemWide, itemTall, itemBig];
        return content.map(photo => {
            const view = random(0, 3, sizes);
            return (
                <div className={`${item} ${view} ${className}`} key={photo.id}>
                    <Img
                        src={`/public/assets/images/gallery/${photo.fileName}`}
                        component="img"
                        className={img}
                        style={{ "objectFit": "cover" }}
                    />
                </div>
            );
        });
    };
    
    return mapItems();
};

export default MixedItems;
