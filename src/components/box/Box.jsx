import { forwardRef } from "react";
import clsx from "clsx";
import * as styles from "./style.m.css";

const Box = forwardRef(function Box(props, ref) {
    const { 
        children, 
        className, 
        "component": Component = "div", 
        view = { "center": true }, 
        ...others
    } = props;
    const styleName = clsx(
        styles[view?.size], view?.center && styles.center, styles.box, className
    );

    if (typeof children === "function") {
        return (
            <Component className={styleName}>
                { children({ view, ...others }) }
            </Component>
        );
    }

    return (
        <Component
            ref={ref}
            className={styleName}
            {...others}
        >
            {children}
        </Component>
    );
});

export default Box;
