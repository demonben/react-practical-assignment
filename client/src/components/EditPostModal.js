import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NewPostForm.module.css";
import { editPosts, uploadPostPicture } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const EditPostModal = ({ editModalIsOpen, closeEditModal, post }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);

  const [text, setText] = useState(post.title);

  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    let postObj = { title: text };
    editPosts(post.id, postObj);
    dispatch(updateAsync(currentPage));
  };
  const updateImage = () => {
    const formData = new FormData();
    formData.append("picture", selectedFile);
    uploadPostPicture(post.id, formData);
    dispatch(updateAsync(currentPage));
  };
  const handleSelectImage = (e) => {
    setSelectedFile(e.target.files[0]);
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
          <div className="App">
            <form>
              <input type="file" onChange={(e) => handleSelectImage(e)} />
              <button onClick={updateImage}>update img</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditPostModal;
