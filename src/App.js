import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState , useEffect} from "react";
import {Button} from '@material-ui/core';
import {db} from "./firebase_config";
import firebase from "firebase";

function App() {

 const [todoInput, setTodoInput] = useState("");

useEffect(() => {
 getTodo();
}, [ ])

function getTodo(){
db.
}




 function addTodo(){
  console.log("your todo input  " );
  db.collection("todo_app").add({
    inprogress: true,
    timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo:todoInput,
  });
  setTodoInput("");
}

  return (
    <div className="App">
     <h1>My Todo App</h1>
     <TextField className="input" id="outlined-basic" label="Enter To-DO "
     value={todoInput}
     onChange={(e)=>{
       setTodoInput(e.target.value);
      //console.log("your todo input  " + e.target.value);
      }}
     variant="outlined" />
     <Button variant="contained" onClick={addTodo}>
       Default
       </Button>
     <div>
     testing
     </div>
    </div>
  );
}

export default App;
 