const TodosList = ({ todosProps, handleChange, delTodo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
      </ul>
    );
  };
  export default TodosList;
  