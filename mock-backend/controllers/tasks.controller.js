/**
 * Tasks & Submissions Controller
 */
const { mockTasks, mockTaskSubmissions } = require('../data/tasks.data');
const { formatPaginatedResponse } = require('../utils/response');

let tasks = [...mockTasks];
let taskSubmissions = [...mockTaskSubmissions];

function getTasks(req, res) {
  // apiService calls api.get<any[]>('/api/tasks_create/') directly or paginated
  // Let's support both array and paginated format, or formatPaginatedResponse
  return res.json(formatPaginatedResponse(req, tasks));
}

function createTask(req, res) {
  const newItem = {
    id: tasks.length + 1,
    title: req.body.title || 'New Task',
    description: req.body.description || '',
    from_date: req.body.from_date || new Date().toISOString().split('T')[0],
    due_date: req.body.due_date || new Date().toISOString().split('T')[0],
    created_by: req.body.created_by || { id: 1, name: 'Alexander Hamilton' },
    assigned_users: req.body.assigned_users || [],
    departments: req.body.departments || [],
    standards: req.body.standards || [],
    sections: req.body.sections || [],
    is_submitted: false,
    submission_task_percentage: 0,
    priority: req.body.priority || 'Medium',
    status: 'Pending',
  };
  tasks.unshift(newItem);
  return res.status(201).json(newItem);
}

function getTaskById(req, res) {
  const item = tasks.find((t) => t.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateTask(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  tasks[index] = { ...tasks[index], ...req.body };
  return res.json(tasks[index]);
}

function deleteTask(req, res) {
  const id = parseInt(req.params.id, 10);
  tasks = tasks.filter((t) => t.id !== id);
  return res.status(204).send();
}

function getTaskSubmissions(req, res) {
  return res.json(formatPaginatedResponse(req, taskSubmissions));
}

function createTaskSubmission(req, res) {
  const newItem = {
    id: taskSubmissions.length + 1,
    ...req.body,
    submission_date: new Date().toISOString(),
    status: 'Submitted',
  };
  taskSubmissions.unshift(newItem);
  return res.status(201).json(newItem);
}

function updateTaskSubmission(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = taskSubmissions.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  taskSubmissions[index] = { ...taskSubmissions[index], ...req.body };
  return res.json(taskSubmissions[index]);
}

function deleteTaskSubmission(req, res) {
  const id = parseInt(req.params.id, 10);
  taskSubmissions = taskSubmissions.filter((s) => s.id !== id);
  return res.status(204).send();
}

module.exports = {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getTaskSubmissions,
  createTaskSubmission,
  updateTaskSubmission,
  deleteTaskSubmission,
};
