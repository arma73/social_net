import clsx from "clsx";
import { bg, img } from "./style.m.css";

const Img = ({
    "component": Component = "img",
    className,
    src,
    alt = "",
    ...restProps
}) => {
    if (Component === "div") {
        return (
            <Component
                className={clsx(bg, className)}
                style={{ "backgroundImage": `url(${src})` }}
                {...restProps}
            />
        );
    }

    return (
        <Component
            className={clsx(img, className)}
            src={src}
            alt={alt}
            {...restProps}
        />
    );
};

export default Img;
