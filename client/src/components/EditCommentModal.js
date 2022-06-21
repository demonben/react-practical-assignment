import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NewPostForm.module.css";
import { editComment } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const EditCommentModal = ({
  editModalIsOpen,
  closeEditModal,
  post,
  comment,
}) => {
  const [text, setText] = useState(comment.text);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();

    let commentObj = {
      text: text,
      likes: comment.likes,
      dislikes: comment.dislikes,
    };
    console.log(commentObj);

    editComment(comment.id, commentObj);
    dispatch(updateAsync(1));
  };
  return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <AiOutlineCloseCircle className="close-icon" size={30} onClick={closeEditModal} />{" "}
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
