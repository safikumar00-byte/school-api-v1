const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');

// Attendance Dashboard
router.get('/attendance-dashboard/dashboard/', attendanceController.getAttendanceDashboard);
router.get('/attendance-dashboard/:userId/user-dashboard/', attendanceController.getUserAttendanceDashboard);

// Attendance records
router.get('/attendance/', attendanceController.getAttendance);
router.post('/attendance/', attendanceController.createAttendance);
router.get('/attendance/attendance-report-student/', attendanceController.getAttendanceReport);
router.get('/attendance-analytics/', attendanceController.getAttendanceAnalytics);

// Class & Staff Attendance
router.get('/class-attendance/', attendanceController.getClassAttendance);
router.post('/class-attendance/', attendanceController.createAttendance);
router.get('/staff-attendance/', attendanceController.getStaffAttendance);
router.post('/staff-attendance/', attendanceController.createAttendance);

// Bulk
router.post('/bulk-attendance/bulk-create/', attendanceController.bulkCreateAttendance);

module.exports = router;
