import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NewPostForm.module.css";
import { editComment } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const EditCommentModal = ({ editModalIsOpen, closeEditModal, comment }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const [text, setText] = useState(comment.text);
  const dispatch = useDispatch();
  const submitHandler = async (event) => {
    event.preventDefault();
    let commentObj = {
      text: text,
      likes: comment.likes,
      dislikes: comment.dislikes,
    };

    await editComment(comment.id, commentObj);
    dispatch(updateAsync(currentPage));
    closeEditModal();
  };
  return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <AiOutlineCloseCircle
          className="close-icon"
          size={30}
          onClick={closeEditModal}
        />{" "}
        <h1 className="title-text">Edit comment </h1>
        <div>
          {" "}
          <form onSubmit={submitHandler} className={styles.Form}>
            <input
              className={styles.Input}
              placeholder=" Type search text.."
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button className={styles.Button} type="submit">
              Edit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditCommentModal;
