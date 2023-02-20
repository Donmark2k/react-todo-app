import styles from '../styles/TodoItem.module.css';
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
      };
    return (
        <li className={styles.item}>
      <div className={styles.content} style={viewMode}>

        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}

        />
        <button onClick={handleEditing}> <AiFillEdit /></button>

      <button onClick={() => delTodo(itemProp.id)}><FaTrash /></button>
        {itemProp.title}
        </div>
        <input
      type="text"
      value={itemProp.title}
      style={editMode}
      onChange={(e) => console.log(e.target.value, itemProp.id)}

      className={styles.textInput}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}

    />
      </li>
    );
  };
  export default TodoItem;
  