import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CommentsList from "./CommentsList";
import NewCommentModal from "./NewCommentModal";

const CommentsModal = ({ CommentsModalIsOpen, closeCommentsModal, post }) => {
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
        <CommentsList post={post} />
        <NewCommentModal />
      </Modal>
    </div>
  );
};

export default CommentsModal;
