import { useState } from "react";
import Modal from "react-modal";
import ColorPicker from "./ColorPicker.jsx";
import { motion } from "framer-motion";

const NewNoteForm = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState(""); //setNoteTest sends data to noteText
  const [noteTitle, setNoteTitle] = useState(""); //setNoteTest sends data to noteText
  const [noteBgColor, setNoteBgColor] = useState("#ee0000");
  const handleBgColorChange = (colorHex) => {
    setNoteBgColor(colorHex);
  };
  const [isColorModalOpen, setColorModalOpen] = useState(false);
  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText, noteTitle, noteBgColor);
    setNoteText("");
    setNoteTitle("");
    document.getElementById("title").value = "";
  };

  const handleColorModalOpen = (event) => {
    event.stopPropagation();
    setColorModalOpen(!isColorModalOpen);
  };
  return (
    <div id="newNote" className="note">
      <div className="newForm colFlex">
        <input
          className="new title"
          maxLength="20"
          id="title"
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
        ></input>
        <textarea
          onInput={(e) => {
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          wrap="hard"
          rows="3"
          placeholder="Your note..."
          value={noteText}
          onChange={handleTextChange}
        ></textarea>
        <div className="noteFooter flex">
          <button
            className="btn btn-primary postButton"
            onClick={handleSaveClick}
          >
            Post!
          </button>
          <button
            className="colorButton"
            style={{
              backgroundColor: noteBgColor,
              borderColor: "#00000050",
            }}
            onClick={handleColorModalOpen}
          ></button>
          <Modal
            parentSelector={() => document.getElementById("newNote")}
            overlayClassName="backgroundOverlay"
            className="colorModal"
            isOpen={isColorModalOpen}
            ariaHideApp={false}
          >
            <motion.div
              initial={{ scale: 0, y: -100 }}
              animate={{ scale: 1, y: 0 }}
            >
              <ColorPicker
                buttonColor={noteBgColor}
                handleBgColorChange={handleBgColorChange}
              />
            </motion.div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default NewNoteForm;
