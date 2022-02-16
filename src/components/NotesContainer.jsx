import Note from "./Note.jsx";
import NewNotesForm from "./NewNotesForm.jsx";

const NotesContainer = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleOpenModal,
}) => {
  return (
    <div className="postContainer ">
      {notes.map((note) => (
        <Note
          className="note"
          key={note.id}
          id={note.id}
          date={note.date}
          editDate={note.editDate}
          text={note.text}
          title={note.title}
          backgroundColor={note.backgroundColor}
          handleDeleteNote={handleDeleteNote}
          handleOpenModal={handleOpenModal}
        />
      ))}
      <NewNotesForm className="new note" handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesContainer;
