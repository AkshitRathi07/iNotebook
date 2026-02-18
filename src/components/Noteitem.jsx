import React,{useContext} from "react"; //  rafce
import noteContext from "../context/notes/noteContext"
import { ThemeContext } from '../context/ThemeContext';

const Noteitem = (props) => {
  const context=useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  const { isDarkMode } = useContext(ThemeContext); // Dark mode state lene ke liye
  return (
    <div className="col-md-3">
     <div className="card my-3 shadow-sm" style={{
        backgroundColor: isDarkMode ? '#2c3034' : 'white',
        color: isDarkMode ? 'white' : 'black',
        border: isDarkMode ? '1px solid #454d55' : '1px solid #ddd',
        borderRadius: '10px'
      }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
             <i className="fa-solid fa-trash-can mx-2 text-danger" onClick={()=>{deleteNote(note._id);
              props.showAlert("Deleted Successfully","success")   }}></i>    
             <i className="fa-regular fa-pen-to-square mx-2 text-info" onClick={()=>{updateNote(note)}}></i>
          </div>
         <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
