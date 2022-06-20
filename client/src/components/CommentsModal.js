import React from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

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
        <NewCommentForm post={post}/>
      </Modal>
    </div>
  );
};

export default CommentsModal;
