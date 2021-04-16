import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css';
import {db} from "./firebase_config";

export default function TodoListItem({todo , inprogress, id}) {



    function toggleInprogress(){
        db.collection("todo_app").doc(id).update({
            inprogress:!inprogress
        })
    }

    function deleteTodo(){
        db.collection("todo_app").doc(id).delete();
    }

    
    return (
        <div>
            <ListItem className="List" >
                <ListItemText primary={todo} secondary={inprogress ? "inprogress":"completed"} />
                <Button onClick={toggleInprogress}>{inprogress ? "Donee":"Undone"}</Button>
                <Button onClick={deleteTodo}>X</Button>
            </ListItem>
        </div>
    );
}
