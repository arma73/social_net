import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Img from "_components/img";
import Arrow from "_components/arrow";
import Modal from "_components/modal";
import { PICK_PHOTO_ROUTE } from "_settings/routes";
import { imagesGallery } from "_settings/mocks/postsGallery";
import getFromId from "_utils/getFromId";

const ViewPick = () => {
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => () => document.body.style.overflow = "", []);

    const pick = getFromId(id, imagesGallery);

    const nextPick = e => {
        e.preventDefault();
        const pick = getFromId(+id + 1, imagesGallery);
        if (pick) {
            history.push(`${PICK_PHOTO_ROUTE}${pick.id}`, history.location.state);
        }
    };

    const previousPick = e => {
        e.preventDefault();
        const pick = getFromId(id - 1, imagesGallery);
        if (pick) {
            history.push(`${PICK_PHOTO_ROUTE}${pick.id}`, history.location.state);
        }
    };

    return (
        <>
            <Arrow
                nextPick={nextPick}
                previousPick={previousPick}
            />
            <Modal>
                <Img
                    src={`/public/assets/images/gallery/${pick.fileName}`}
                    style={{ "objectFit": "cover" }}
                />
            </Modal>
        </>
    );
};

export default ViewPick;
