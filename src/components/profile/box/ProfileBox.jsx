import clsx from "clsx";
import ProfileAvatar from "_components/profile/avatar";
import PrimaryText from "_components/profile/primarytext";
import { ProfilePresent, ProfilePresentFollowers, ProfilePresentPosts } from "_components/profile/present";

import { box } from "./style.m.css";

const ProfileBox = ({ 
    children, 
    photoSrc,
    name,
    postsCount,
    followersCount,
    id,
    className 
}) => (
    <section className={clsx(box, className)} >
        <ProfileAvatar src={photoSrc} />
        <div id={id}>
            <PrimaryText name={name} />
            <ProfilePresent>
                <ProfilePresentPosts count={postsCount} />
                <ProfilePresentFollowers count={followersCount} />
            </ProfilePresent>
        </div>
        {children}
    </section>
);

export default ProfileBox;
