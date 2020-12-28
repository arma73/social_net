import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { SELF_PAGE_ROUTE } from "_settings/routes";
import Button from "_components/form/button";
import CloseIcon from "_theme/icons/close.svg";

import { backdrop, close, buttonClose, disableDblTapZoom } from "./style.m.css";

const Backdrop = ({ children, className }) => {
    const history = useHistory();
    const dropRef = useRef(null);
    
    const handleClick = e => {
        if (e.target === dropRef.current) {
            handleCloseBack();
        }
    };

    const handleCloseBack = () => history.push(SELF_PAGE_ROUTE);

    return (
        <div 
            className={`${backdrop} ${className} ${disableDblTapZoom}`}
            onClick={handleClick}
            ref={dropRef}
        >
            {children}
            <div className={close}>
                <Button
                    className={buttonClose}
                    onClick={handleCloseBack}
                >
                    <CloseIcon
                        width="24px"
                        height="24px"
                    />
                </Button>
            </div>
        </div>
    );
};

export default Backdrop;
