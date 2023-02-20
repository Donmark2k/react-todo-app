const TodoItem = ({ itemProp, setTodos }) => {

    const handleChange = (id) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        );
      };
      
  
    return (
      <li>
        <input
          // ...
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;
  