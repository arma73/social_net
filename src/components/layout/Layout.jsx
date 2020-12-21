import clsx from "clsx";
import { layout, center } from "./style.m.css";

const Layout = ({ children, view, className, ...restProps }) => (
    <main className={clsx(layout, className, { [center]: view.center })} {...restProps}>
        {children}
    </main>
);

export default Layout;
