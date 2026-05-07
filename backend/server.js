const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 요청 파싱

// 라우터 설정
app.use('/todos', todosRouter);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on https://testv3-1.onrender.com:${PORT}`);
});