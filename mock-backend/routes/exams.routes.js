const express = require('express');
const router = express.Router();
const examsController = require('../controllers/exams.controller');

// Timetable & Types
router.get('/exam-timetable/', examsController.getExamTimetable);
router.get('/exam-types/', examsController.getExamTypes);

// Marks & Analytics
router.get('/student-marks/', examsController.getStudentMarksTable);
router.get('/student-exam-marks/', examsController.getStudentExamMarks);
router.get('/student-marks/analytics/', examsController.getStudentMarksAnalytics);
router.get('/student-marks-analytics/', examsController.getStudentMarksAnalytics);

// Answers
router.get('/answers/', examsController.getAnswers);
router.post('/answers/', examsController.createAnswer);

module.exports = router;
