import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
const CommentsModal = ({ CommentsModalIsOpen, closeCommentsModal }) => {
  return (
    <div>
      {" "}
      <Modal
        isOpen={CommentsModalIsOpen}
        onRequestClose={closeCommentsModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <AiOutlineCloseCircle onClick={closeCommentsModal} />
      </Modal>
    </div>
  );
};

export default CommentsModal;
