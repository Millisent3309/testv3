import axios from 'axios';

const API_BASE_URL = 'https://testv3-1.onrender.com/todos';

// 모든 할 일 조회
export const getTodos = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// 새 할 일 추가
export const addTodo = async (text) => {
  const response = await axios.post(API_BASE_URL, { text });
  return response.data;
};

// 할 일 완료 상태 토글
export const toggleTodo = async (id) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}`);
  return response.data;
};

// 할 일 삭제
export const deleteTodo = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};