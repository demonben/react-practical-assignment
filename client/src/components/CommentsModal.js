import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
const CommentsModal = ({ modalIsOpen, closeCommentsModal }) => {
  return (
    <div>
      {" "}
      <Modal
        isOpen={modalIsOpen}
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
