import { font } from "./style.m.css";

const ProfileName = ({ name }) => (
    <div className={font}>
        <h2> {name} </h2>
    </div>
);

export default ProfileName;
