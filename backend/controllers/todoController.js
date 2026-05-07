// 메모리 기반 데이터 저장 (나중에 DB로 교체 가능)
let todos = [];
let nextId = 1;

const getTodos = (req, res) => {
  res.json(todos);
};

const addTodo = (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: '할 일 텍스트가 필요합니다.' });
  }
  const newTodo = {
    id: nextId++,
    text: text.trim(),
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const toggleTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: '할 일을 찾을 수 없습니다.' });
  }
  todo.completed = !todo.completed;
  res.json(todo);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: '할 일을 찾을 수 없습니다.' });
  }
  todos.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo
};