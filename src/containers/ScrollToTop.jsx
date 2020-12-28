import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.onbeforeunload = function () {
            document.querySelector("#app").innerHTML = "";
            document.querySelector("#app").style.overflowY = "scroll";
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        };
    }, [pathname]);

    return children;
};

export default ScrollToTop;
