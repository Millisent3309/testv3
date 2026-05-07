import { useState } from 'react';
import { addTodo } from '../services/api';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // 빈 입력 방지
    try {
      await addTodo(text);
      setText('');
      onAdd(); // 목록 새로고침
    } catch (error) {
      console.error('할 일을 추가하는데 실패했습니다:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="할 일을 입력하세요"
        className="todo-input"
      />
      <button type="submit" className="add-button">추가</button>
    </form>
  );
}

export default TodoForm;