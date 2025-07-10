import { memo } from "react";
import { CiWarning } from "react-icons/ci";

import Modal from "../common/modal/ModalBase";
import PhotoUploadPanel from "./PhotoUploadPanel";


function LoadImageModal({ open, setOpen, onUpload }) {

    return (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <PhotoUploadPanel onUpload={onUpload} />
        </Modal>
    )

}

export default memo(LoadImageModal)