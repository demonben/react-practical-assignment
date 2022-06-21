import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NewPostForm.module.css";
import { editPosts, uploadPostPicture } from "../lib/api";
import { updateAsync } from "../redux/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const EditPostModal = ({ editModalIsOpen, closeEditModal, post }) => {
  const currentPage = useSelector((state) => state.posts.currentPage);
  const [text, setText] = useState(post.title);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let postObj = { title: text };
    await editPosts(post.id, postObj);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("picture", selectedFile);
      await uploadPostPicture(post.id, formData);
    }
    dispatch(updateAsync(currentPage));
    setIsLoading(false);
    closeEditModal();
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
        <AiOutlineCloseCircle
          className="close-icon"
          size={30}
          onClick={closeEditModal}
        />{" "}
        <h1 className="title-text">Edit your post</h1>
        <div>
          {" "}
          <form onSubmit={submitHandler} className={styles.Form}>
            <input type="file" onChange={(e) => handleSelectImage(e)} />
            <input
              className={styles.Input}
              placeholder=" Type search text.."
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            {!isLoading ? (
              <button className={styles.Button} type="submit">
                Edit
              </button>
            ) : (
              <Loader />
            )}
          </form>
          <div id="image-up"></div>
        </div>
      </Modal>
    </div>
  );
};

export default EditPostModal;
