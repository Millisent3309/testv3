import TodoItem from './TodoItem';

function TodoList({ todos, onUpdate }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default TodoList;