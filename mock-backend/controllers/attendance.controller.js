/**
 * Attendance Controller
 */
const {
  mockAttendanceDashboard,
  mockClassAttendance,
  mockStaffAttendance,
  mockAttendanceRecords,
  mockAttendanceAnalytics,
} = require('../data/attendance.data');
const { formatPaginatedResponse } = require('../utils/response');

let attendanceRecords = [...mockAttendanceRecords];
let classAttendance = [...mockClassAttendance];
let staffAttendance = [...mockStaffAttendance];

function getAttendanceDashboard(req, res) {
  return res.json(mockAttendanceDashboard);
}

function getUserAttendanceDashboard(req, res) {
  return res.json({
    userId: req.params.userId || '1',
    attendance_percentage: '96.2%',
    total_days: 180,
    present_days: 173,
    absent_days: 5,
    late_days: 2,
  });
}

function getAttendance(req, res) {
  return res.json(formatPaginatedResponse(req, attendanceRecords));
}

function createAttendance(req, res) {
  const newRecord = {
    id: attendanceRecords.length + 1,
    date: req.body.date || new Date().toISOString().split('T')[0],
    status: req.body.status || 'present',
    subject: req.body.subject || 'General Class',
    period: req.body.period || 'Period 1',
    teacher: req.body.teacher || 'Sarah Johnson',
    remarks: req.body.remarks || '',
  };
  attendanceRecords.unshift(newRecord);
  return res.status(201).json(newRecord);
}

function getAttendanceReport(req, res) {
  return res.json({
    student_id: req.query.student_id || 7,
    overall_percentage: 95.0,
    total_classes: 120,
    attended_classes: 114,
    monthly_breakdown: mockAttendanceAnalytics.monthly_trend,
  });
}

function getClassAttendance(req, res) {
  return res.json(formatPaginatedResponse(req, classAttendance));
}

function getStaffAttendance(req, res) {
  return res.json(formatPaginatedResponse(req, staffAttendance));
}

function getAttendanceAnalytics(req, res) {
  return res.json(mockAttendanceAnalytics);
}

function bulkCreateAttendance(req, res) {
  const records = req.body.records || [];
  return res.status(201).json({
    detail: `Successfully recorded ${records.length || 1} attendance entries.`,
    count: records.length,
  });
}

module.exports = {
  getAttendanceDashboard,
  getUserAttendanceDashboard,
  getAttendance,
  createAttendance,
  getAttendanceReport,
  getClassAttendance,
  getStaffAttendance,
  getAttendanceAnalytics,
  bulkCreateAttendance,
};
