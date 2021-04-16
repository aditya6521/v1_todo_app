import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



/*
onChange={function toggleInprogress(){
    db.collection("todo_app").doc(todo.id).update(todo.inprogress({
      inprogess:!inprogress
    }))
  }}


  <ListItem className="List">
          <ListItemText primary={todo.todo} secondary={todo.inprogress ? "Inprogress":"completed"} />
          <Button>{todo.inprogress ? "Donee":"Undone"}</Button>
          <Button onChange={()=>{
            db.collection("todo.app").doc(todo.id).delete();
          }}>X</Button>
        </ListItem>
  */