import { toggleTodo, deleteTodo } from '../services/api';

function TodoItem({ todo, onUpdate }) {
  const handleToggle = async () => {
    try {
      await toggleTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('할 일 상태를 변경하는데 실패했습니다:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('할 일을 삭제하는데 실패했습니다:', error);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={handleDelete} className="delete-button">삭제</button>
    </div>
  );
}

export default TodoItem;