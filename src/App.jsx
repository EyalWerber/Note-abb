import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesContainer from "./components/NotesContainer";
import NoteModal from "./components/NoteModal";
import localforage from "localforage";

const App = () => {
  let [notes, setNotes] = useState([]); //notes is the State variable(State is a React Component property)
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [modalContent, setModalContent] = useState();

  /* useEffect(callback,dependency) - Checks if dependency value changed, and perfoms the callback
   If no dependency is given, callback will be called endlessly*/
  useEffect(() => {
    const temp = JSON.stringify(notes);
    localforage.setItem("notes", temp);
  }, [notes]);

  useEffect(() => {
    async function fetchNotes() {
      const temp = await localforage.getItem("notes");
      const loadedNotes = JSON.parse(temp);
      if (loadedNotes) {
        setNotes(loadedNotes);
      }
    }
    fetchNotes();
  }, []);

  const openModal = (id) => {
    // setModalContent()
    const newNotes = notes.filter((note) => {
      return note.id === id;
    });

    setModalContent(newNotes[0]);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNote = (text, title, backgroundColor) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      title: title,
      backgroundColor: backgroundColor,
      date: date.toLocaleString(),
    };
    setNotes(() => [...notes, newNote]);
    localforage.setItem(newNote.id, newNote).then((values) => {
      console.log(values);
    });
  };
  const deleteNote = (id) => {
    console.log("delete after edit");
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(newNotes);
  };
  const editNote = (id, text, title, noteBgColor) => {
    notes.forEach((note) => {
      if (note.id === id) {
        note.text = text;
        note.title = title;
        note.backgroundColor = noteBgColor;
        note.editDate = new Date().toLocaleString();
      }
    });

    setNotes([...notes]);
  };

  return (
    <div>
      <NotesContainer
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleOpenModal={openModal}
      />
      {modalContent && (
        <NoteModal
          modalContent={modalContent}
          handleCloseModal={closeModal}
          handleEditNote={editNote}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default App;
