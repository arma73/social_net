import Img from "_components/img";
import random from "_utils/random";

import { item, itemMedium, itemLarge, itemFull } from "./style.m.css";

const GridItems = ({ className, content }) => {
    const mapItems = () => {
        const sizes = ["", itemMedium, itemLarge, itemFull];
        return content.map(photo => {
            const view = random(0, 3, sizes);
            return (
                <div className={`${item} ${view} ${className}`} key={photo.id}>
                    <Img
                        src={`/public/assets/images/gallery/${photo.fileName}`}
                        component="img"
                        style={{ "objectFit": "cover" }}
                    />
                </div>
            );
        });
    };

    return mapItems();
};

export default GridItems;
