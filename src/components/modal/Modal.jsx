import Backdrop from "_components/backdrop";

import { modal, center } from "./style.m.css";

const Modal = ({ children }) => (
    <Backdrop
        className={center}
    >
        <div
            className={modal}
        >
            {children}
        </div>
    </Backdrop>
);

export default Modal;
