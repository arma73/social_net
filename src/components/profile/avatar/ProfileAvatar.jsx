import Img from "_components/img";
import { avatar, img } from "./style.m.css";

const ProfileAvater = ({ src }) => (
    <div className={avatar}>
        <Img 
            src={src} 
            component="img" 
            className={img} 
            style={{ "objectFit": "cover" }}
        />
    </div>
);

export default ProfileAvater;
