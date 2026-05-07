import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { getTodos } from '../services/api';

function App() {
  const [todos, setTodos] = useState([]);

  // 초기 데이터 로드
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('할 일 목록을 불러오는데 실패했습니다:', error);
    }
  };

  return (
    <div className="app">
      <h1>체크리스트</h1>
      <TodoForm onAdd={fetchTodos} />
      <TodoList todos={todos} onUpdate={fetchTodos} />
    </div>
  );
}

export default App;