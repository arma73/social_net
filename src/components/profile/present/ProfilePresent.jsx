import { Children } from "react";
import { present } from "./style.m.css";

const ProfilePresent = ({ children }) => ( 
    <ul className={present}>
        {Children.map(children, child => (
            <li> {child} </li>
        ))}
    </ul>
);

export default ProfilePresent;
