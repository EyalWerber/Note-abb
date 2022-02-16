import { useState } from "react";

const NewNoteForm = ({ exitEditMode, handleEditNote, modalContent }) => {
  const [noteText, setNoteText] = useState(modalContent.text); //setNoteTest sends data to noteText
  const [noteTitle, setNoteTitle] = useState(modalContent.title); //setNoteTest sends data to noteText

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };
  const editNote = () => {
    handleEditNote(
      modalContent.id,
      noteText,
      noteTitle,
      modalContent.backgroundColor
    );
    exitEditMode();
  };

  return (
    <div>
      <div className="editForm colFlex">
        <input
          className="new title"
          maxLength="20"
          id="title"
          type="text"
          placeholder="Title"
          value={noteTitle}
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
          <button onClick={editNote} className="actionButton btn btn-success">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewNoteForm;
