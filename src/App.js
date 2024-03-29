import './App.css';
import TextField from '@material-ui/core/TextField';
import {
  useState,
  useEffect
} from "react";
import {
  Button
} from '@material-ui/core';
import {
  db
} from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodo();
  }, [])

  /*function toggleInprogress(){
    db.collection("todo_app").doc(todo.id).update({
      inprogess:!inprogress
    })
  }

  function deleteTodo() {
    db.collection("todo_app").doc(todo.id).delete();
  }*/

  function getTodo() {
    db.collection("todo_app").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,

        }))
      );
    });
  }




  function addTodo() {
    console.log("your todo input  ");
    db.collection("todo_app").add({
      inprogress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  }

  return (

    <
    div className = "App" >
    <
    h1 > My Todo App </h1> <
    TextField className = "input"
    id = "outlined-basic"
    label = "Enter To-DO "
    value = {
      todoInput
    }
    onChange = {
      (e) => {
        setTodoInput(e.target.value);
        //console.log("your todo input  " + e.target.value);
      }
    }
    variant = "outlined" / >
    <div className="Add">
      <
    Button className="AddButton" variant = "contained"
    onClick = {
      addTodo
    } >
    Add 
    </Button> 
    </div>

    {
      todos.map((todo) => ( 
      
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />


      ))
    }  
    </div>
  ); 
}

export default App;