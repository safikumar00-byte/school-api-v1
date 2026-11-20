/**
 * Exams, Marks & Analytics Mock Data
 */

const mockExamTypes = [
  { id: 1, name: 'Unit Test 1', code: 'UT1', is_active: true },
  { id: 2, name: 'Mid-Term Examination', code: 'MID', is_active: true },
  { id: 3, name: 'Unit Test 2', code: 'UT2', is_active: true },
  { id: 4, name: 'Final Annual Examination', code: 'FINAL', is_active: true },
];

const mockExamTimetable = [
  {
    id: 1,
    name: 'Mid-Term Examination 2026',
    start_date: '2026-12-01',
    end_date: '2026-12-10',
    is_online: false,
    standard: { id: 5, name: 'Grade 10' },
    exam_schedules: [
      { id: 101, start_time: '09:00 AM', end_time: '12:00 PM', department: { name: 'Mathematics' }, marks: 100, date: '2026-12-01' },
      { id: 102, start_time: '09:00 AM', end_time: '12:00 PM', department: { name: 'Science & Physics' }, marks: 100, date: '2026-12-03' },
      { id: 103, start_time: '09:00 AM', end_time: '12:00 PM', department: { name: 'English & Literature' }, marks: 100, date: '2026-12-05' },
      { id: 104, start_time: '09:00 AM', end_time: '12:00 PM', department: { name: 'Computer Science & AI' }, marks: 100, date: '2026-12-08' },
    ],
  },
];

const mockStudentMarksTable = [
  {
    id: 1,
    student: { id: 7, name: 'Aarav Patel', roll_number: '10A01' },
    subject: { id: 1, name: 'Mathematics' },
    marks_obtained: 94,
    total_marks: 100,
    percentage: 94,
    grade: 'A+',
    exam_type: 'Mid-Term Examination',
    exam_date: '2026-11-01',
  },
  {
    id: 2,
    student: { id: 7, name: 'Aarav Patel', roll_number: '10A01' },
    subject: { id: 2, name: 'Physics' },
    marks_obtained: 88,
    total_marks: 100,
    percentage: 88,
    grade: 'A',
    exam_type: 'Mid-Term Examination',
    exam_date: '2026-11-03',
  },
  {
    id: 3,
    student: { id: 7, name: 'Aarav Patel', roll_number: '10A01' },
    subject: { id: 5, name: 'English Literature' },
    marks_obtained: 92,
    total_marks: 100,
    percentage: 92,
    grade: 'A+',
    exam_type: 'Mid-Term Examination',
    exam_date: '2026-11-05',
  },
  {
    id: 4,
    student: { id: 8, name: 'Ananya Sharma', roll_number: '10A02' },
    subject: { id: 1, name: 'Mathematics' },
    marks_obtained: 98,
    total_marks: 100,
    percentage: 98,
    grade: 'A+',
    exam_type: 'Mid-Term Examination',
    exam_date: '2026-11-01',
  },
  {
    id: 5,
    student: { id: 8, name: 'Ananya Sharma', roll_number: '10A02' },
    subject: { id: 2, name: 'Physics' },
    marks_obtained: 95,
    total_marks: 100,
    percentage: 95,
    grade: 'A+',
    exam_type: 'Mid-Term Examination',
    exam_date: '2026-11-03',
  },
];

const mockStudentMarksAnalytics = {
  subject_wise: [
    { subject: 'Mathematics', average_marks: 86.4, highest_marks: 100, lowest_marks: 48, pass_percentage: 96.5, students_count: 120 },
    { subject: 'Physics', average_marks: 82.1, highest_marks: 98, lowest_marks: 44, pass_percentage: 94.0, students_count: 120 },
    { subject: 'Chemistry', average_marks: 79.8, highest_marks: 96, lowest_marks: 42, pass_percentage: 92.5, students_count: 120 },
    { subject: 'English', average_marks: 88.5, highest_marks: 97, lowest_marks: 56, pass_percentage: 98.0, students_count: 120 },
    { subject: 'Computer Science', average_marks: 91.2, highest_marks: 100, lowest_marks: 62, pass_percentage: 99.0, students_count: 120 },
  ],
  class_wise: [
    { class_name: 'Grade 10-A', average_marks: 89.2, total_students: 40, passed_students: 40, failed_students: 0 },
    { class_name: 'Grade 10-B', average_marks: 84.6, total_students: 38, passed_students: 37, failed_students: 1 },
    { class_name: 'Grade 10-C', average_marks: 81.3, total_students: 35, passed_students: 33, failed_students: 2 },
  ],
  overall_stats: {
    total_students: 113,
    overall_average: 85.0,
    overall_pass_percentage: 97.3,
    grade_distribution: [
      { grade: 'A+ (90-100%)', count: 42, percentage: 37.2 },
      { grade: 'A (80-89%)', count: 48, percentage: 42.5 },
      { grade: 'B (70-79%)', count: 15, percentage: 13.3 },
      { grade: 'C (50-69%)', count: 5, percentage: 4.4 },
      { grade: 'F (<50%)', count: 3, percentage: 2.6 },
    ],
  },
};

const mockAnswers = [
  { id: 1, student: 7, question: 101, answer_text: 'Derivative of f(x) = 2x + 3', is_correct: true, marks_awarded: 5 },
];

module.exports = {
  mockExamTypes,
  mockExamTimetable,
  mockStudentMarksTable,
  mockStudentMarksAnalytics,
  mockAnswers,
};
