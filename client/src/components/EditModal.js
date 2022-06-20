import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NewPostForm.module.css";
import { editPosts } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";

const EditModal = ({ editModalIsOpen, closeEditModal, post }) => {
  const [text, setText] = useState(post.title);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    let postObj = { title: text };
    editPosts(post.id, postObj);
    dispatch(updateAsync(1))
  };
  return (
    <div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="test"
        ariaHideApp={false}
      >
        <AiOutlineCloseCircle onClick={closeEditModal} />{" "}
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

export default EditModal;
