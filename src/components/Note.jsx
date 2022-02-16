const Note = (props) => {
  const deleteConf = (event) => {
    event.stopPropagation();
    if (window.confirm(`Are you sure you want to delete post ${props.id} `)) {
      props.handleDeleteNote(props.id);
    }
  };
  const showModal = () => {
    props.handleOpenModal(props.id);
  };
  return (
    <div
      className="note"
      onClick={showModal}
      style={{
        backgroundColor: props.backgroundColor,
        boxShadow: `0px 0px 10px 5px ${props.backgroundColor + "55"}`,
      }}
    >
      <h5>{props.title}</h5>
      <div className="noteText" wrap="hard" rows="3">
        {props.text}
      </div>
      <div className="noteFooter flex">
        <div className="noteDate">
          {props.date}
          <br />
          {props.editDate && <small>Edited: {props.editDate}</small>}
        </div>

        <button onClick={deleteConf} className="actionButton delete  btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
