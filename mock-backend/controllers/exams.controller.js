/**
 * Exams, Marks & Analytics Controller
 */
const {
  mockExamTypes,
  mockExamTimetable,
  mockStudentMarksTable,
  mockStudentMarksAnalytics,
  mockAnswers,
} = require('../data/exams.data');
const { formatPaginatedResponse } = require('../utils/response');

let studentMarks = [...mockStudentMarksTable];
let answers = [...mockAnswers];

function getExamTimetable(req, res) {
  return res.json(mockExamTimetable);
}

function getExamTypes(req, res) {
  return res.json(formatPaginatedResponse(req, mockExamTypes));
}

function getStudentMarksTable(req, res) {
  return res.json(formatPaginatedResponse(req, studentMarks));
}

function getStudentExamMarks(req, res) {
  return res.json(formatPaginatedResponse(req, studentMarks));
}

function getStudentMarksAnalytics(req, res) {
  return res.json(mockStudentMarksAnalytics);
}

function getAnswers(req, res) {
  return res.json(formatPaginatedResponse(req, answers));
}

function createAnswer(req, res) {
  const newItem = {
    id: answers.length + 1,
    ...req.body,
  };
  answers.push(newItem);
  return res.status(201).json(newItem);
}

module.exports = {
  getExamTimetable,
  getExamTypes,
  getStudentMarksTable,
  getStudentExamMarks,
  getStudentMarksAnalytics,
  getAnswers,
  createAnswer,
};
