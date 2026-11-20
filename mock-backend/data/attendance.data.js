/**
 * Attendance Mock Data
 */

const mockAttendanceDashboard = {
  attendance_percentage: '94.5%',
  total_days: 180,
  present_days: 170,
  absent_days: 7,
  late_days: 3,
  total_students: 1250,
  present_students: 1180,
  absent_students: 52,
  late_students: 18,
  total_teachers: 78,
  present_teachers: 75,
  absent_teachers: 3,
  student_attendance_percentage: 94.4,
  teacher_attendance_percentage: 96.1,
};

const mockClassAttendance = [
  { id: 1, student_name: 'Aarav Patel', roll_number: '10A01', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 2, student_name: 'Ananya Sharma', roll_number: '10A02', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 3, student_name: 'Rohan Gupta', roll_number: '10A03', status: 'absent', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 4, student_name: 'Diya Verma', roll_number: '10A04', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 5, student_name: 'Kabir Mehta', roll_number: '10A05', status: 'late', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 6, student_name: 'Isha Reddy', roll_number: '10A06', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 7, student_name: 'Dev Malhotra', roll_number: '10A07', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 8, student_name: 'Zara Khan', roll_number: '10A08', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 9, student_name: 'Aditya Nair', roll_number: '10A09', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
  { id: 10, student_name: 'Pooja Iyer', roll_number: '10A10', status: 'present', date: '2026-11-13', standard: 'Grade 10', section: 'Section A' },
];

const mockStaffAttendance = [
  { id: 1, teacher_name: 'Dr. Robert Chen', employee_id: 'EMP101', status: 'present', date: '2026-11-13', department: 'Mathematics' },
  { id: 2, teacher_name: 'Sarah Johnson', employee_id: 'EMP102', status: 'present', date: '2026-11-13', department: 'Mathematics' },
  { id: 3, teacher_name: 'Dr. Evelyn Reed', employee_id: 'EMP103', status: 'present', date: '2026-11-13', department: 'Science & Physics' },
  { id: 4, teacher_name: 'Margaret Atwood', employee_id: 'EMP104', status: 'present', date: '2026-11-13', department: 'English & Literature' },
  { id: 5, teacher_name: 'Alan Turing', employee_id: 'EMP105', status: 'present', date: '2026-11-13', department: 'Computer Science & AI' },
  { id: 6, teacher_name: 'Vikram Singh', employee_id: 'EMP106', status: 'absent', date: '2026-11-13', department: 'Physical Education' },
];

const mockAttendanceRecords = [
  { id: 1, date: '2026-11-13', status: 'present', subject: 'Mathematics', period: 'Period 1', teacher: 'Sarah Johnson', remarks: 'On time' },
  { id: 2, date: '2026-11-13', status: 'present', subject: 'Physics', period: 'Period 2', teacher: 'Dr. Evelyn Reed', remarks: 'Active participation' },
  { id: 3, date: '2026-11-12', status: 'present', subject: 'English', period: 'Period 3', teacher: 'Margaret Atwood', remarks: 'Completed reading' },
  { id: 4, date: '2026-11-12', status: 'late', subject: 'Computer Science', period: 'Period 4', teacher: 'Alan Turing', remarks: 'Late by 5 mins' },
  { id: 5, date: '2026-11-11', status: 'present', subject: 'Chemistry', period: 'Period 1', teacher: 'Dr. Evelyn Reed', remarks: 'Lab session' },
  { id: 6, date: '2026-11-10', status: 'absent', subject: 'Mathematics', period: 'Period 2', teacher: 'Sarah Johnson', remarks: 'Medical excuse submitted' },
  { id: 7, date: '2026-11-09', status: 'present', subject: 'Social Studies', period: 'Period 3', teacher: 'David Miller', remarks: 'On time' },
];

const mockAttendanceAnalytics = {
  monthly_trend: [
    { month: 'Jun', percentage: 96.2 },
    { month: 'Jul', percentage: 95.0 },
    { month: 'Aug', percentage: 93.8 },
    { month: 'Sep', percentage: 94.5 },
    { month: 'Oct', percentage: 95.2 },
    { month: 'Nov', percentage: 94.5 },
  ],
  day_wise_average: [
    { day: 'Mon', percentage: 96.0 },
    { day: 'Tue', percentage: 95.5 },
    { day: 'Wed', percentage: 94.8 },
    { day: 'Thu', percentage: 93.9 },
    { day: 'Fri', percentage: 92.5 },
  ],
  class_wise_attendance: [
    { standard: 'Grade 6', percentage: 96.5 },
    { standard: 'Grade 7', percentage: 95.8 },
    { standard: 'Grade 8', percentage: 94.2 },
    { standard: 'Grade 9', percentage: 93.9 },
    { standard: 'Grade 10', percentage: 95.1 },
    { standard: 'Grade 11', percentage: 92.8 },
    { standard: 'Grade 12', percentage: 94.0 },
  ],
};

module.exports = {
  mockAttendanceDashboard,
  mockClassAttendance,
  mockStaffAttendance,
  mockAttendanceRecords,
  mockAttendanceAnalytics,
};
