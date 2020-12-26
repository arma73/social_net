import { descBox } from "./style.m.css";

const ProfileDescription = ({ children, description = "" }) => (
    <div className={descBox}>
        <span> {children || description} </span>
    </div>
);

export default ProfileDescription;
