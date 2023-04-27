import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });


  const [show,setShow] = useState(true); 

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const showEvent = ()=> {
     setShow(!show);
  }
   
  const clickEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote({title : "", content : ""});
    setShow(true);
  };

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
            onClick={showEvent}
          />
          <textarea
            name="content"
            value={note.content}
            onChange={inputEvent}
            rows=""
            cols=""
            placeholder="Write a Note..."
            style={{display : show ? "none" : "block"}}
          ></textarea>
          <Button onClick={clickEvent} style={{display : show ? "none" : "block"}}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
