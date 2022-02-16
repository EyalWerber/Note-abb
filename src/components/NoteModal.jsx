import Modal from "react-modal";
import { motion } from "framer-motion";
import { useState } from "react";
import EditNotesForm from "./EditNotesForm.jsx";

const NoteModal = ({
  handleEditNote,
  handleCloseModal,
  isOpen,
  modalContent,
}) => {
  let [editMode, setEditMode] = useState(false);
  const editNote = () => {
    setEditMode(true);
  };
  const exitEditMode = () => {
    setEditMode(false);
  };
  const exitModal = () => {
    setEditMode(false);
    handleCloseModal();
  };

  return (
    <Modal
      className="modalPreset"
      isOpen={isOpen}
      handleEditNote={handleEditNote}
      ariaHideApp={false}
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        ariaHideApp={false}
        className="noteModal"
        style={{
          backgroundColor: modalContent.backgroundColor,
          borderColor: "#00000050",
        }}
      >
        <div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          className="noteModalContent"
        >
          <div className="exitModalButtonContainer">
            <button className="exitModalButton" onClick={exitModal}>
              X
            </button>
          </div>
          {!editMode && (
            <div className="modalView">
              <div className="modalTitle">
                <h3>{modalContent.title}</h3>
              </div>
              <div className="modalText">{modalContent.text}</div>
              <div className="noteFooter flex">
                <div className="date">{modalContent.date}</div>
                <button
                  onClick={editNote}
                  className="actionButton btn btn-warning"
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {editMode && (
            <div className="modalEdit">
              <EditNotesForm
                exitEditMode={exitEditMode}
                handleEditNote={handleEditNote}
                modalContent={modalContent}
              />
            </div>
          )}
        </div>
      </motion.div>
    </Modal>
  );
};
export default NoteModal;
