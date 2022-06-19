import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditModal = ({ editModalIsOpen, closeEditModal }) => {
  return (
    <div>
      {" "}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <div>edit modal</div>
        <AiOutlineCloseCircle onClick={closeEditModal} />
      </Modal>
    </div>
  );
};

export default EditModal;
