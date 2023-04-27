import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note.jsx";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldItem) => {
      return [...oldItem, note];
    });
  };

  const onDelete = (id) => {
    
    // console.log(id);
    
    // setAddItem((oldItem)=> oldItem.filter((currele,index)=>{return index!== id;})) 

    setAddItem((oldItem)=>{
        const newArr = oldItem.filter((ele,index)=>{
            return index !== id;
        })
        return newArr;
    })

  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
