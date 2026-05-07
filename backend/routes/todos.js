const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// GET /todos - 모든 할 일 조회
router.get('/', todoController.getTodos);

// POST /todos - 새 할 일 추가
router.post('/', todoController.addTodo);

// PATCH /todos/:id - 할 일 완료 상태 토글
router.patch('/:id', todoController.toggleTodo);

// DELETE /todos/:id - 할 일 삭제
router.delete('/:id', todoController.deleteTodo);

module.exports = router;