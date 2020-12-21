import React from "react";
import clsx from "clsx";
import * as styles from "./style.m.css";

export const buttonColors = 
    ["outline", "transparent", "white", "grey"];
export const buttonSizes = ["xs", "sm", "md", "lg"];

const Button = ({
    children,
    className,
    type = "button",
    view,
    onClick,
    disabled = false,
    ...restProps
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={clsx(
            className,
            styles?.button, 
            styles[view?.color],
            styles[view?.size]
        )}
        {...restProps}
    >
        {children}
    </button>
);

export default Button;
