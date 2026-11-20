/**
 * Leave Management & Holiday Calendar Mock Data
 */

const mockLeaveRequests = [
  {
    id: 1,
    employee: {
      id: 2,
      first_name: 'Sarah',
      email: 'sarah.j@visionariesai.com',
      department: { id: 1, name: 'Mathematics' },
    },
    user: {
      first_name: 'Sarah',
      email: 'sarah.j@visionariesai.com',
    },
    leave_type: 'Casual Leave',
    created: '2026-11-10T09:00:00Z',
    applied_date: '2026-11-10',
    from_date: '2026-11-20',
    to_date: '2026-11-21',
    days_requested: 2,
    reason: 'Family wedding ceremony out of town',
    status: 'approved',
    approved_by: { id: 101, name: 'Dr. Robert Chen' },
    approved_date: '2026-11-11T14:00:00Z',
  },
  {
    id: 2,
    employee: {
      id: 5,
      first_name: 'Alan',
      email: 'alan.turing@visionariesai.com',
      department: { id: 4, name: 'Computer Science & AI' },
    },
    user: {
      first_name: 'Alan',
      email: 'alan.turing@visionariesai.com',
    },
    leave_type: 'Sick Leave',
    created: '2026-11-12T08:30:00Z',
    applied_date: '2026-11-12',
    from_date: '2026-11-12',
    to_date: '2026-11-13',
    days_requested: 2,
    reason: 'Viral fever and medical consultation',
    status: 'approved',
    approved_by: { id: 1, name: 'Alexander Hamilton' },
    approved_date: '2026-11-12T10:00:00Z',
  },
  {
    id: 3,
    employee: {
      id: 6,
      first_name: 'David',
      email: 'david.miller@visionariesai.com',
      department: { id: 5, name: 'Administration' },
    },
    user: {
      first_name: 'David',
      email: 'david.miller@visionariesai.com',
    },
    leave_type: 'Privilege Leave',
    created: '2026-11-13T10:00:00Z',
    applied_date: '2026-11-13',
    from_date: '2026-12-01',
    to_date: '2026-12-05',
    days_requested: 5,
    reason: 'Annual personal leave',
    status: 'pending',
  },
];

const mockLeaveQuotas = [
  {
    id: 1,
    employee: {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@visionariesai.com',
      department: { id: 1, name: 'Mathematics' },
    },
    leave_type: {
      id: 1,
      name: 'Casual Leave',
      max_days_per_year: 12,
    },
    year: 2026,
    total_allocated: 12,
    used_days: 4,
    remaining_days: 8,
    pending_days: 0,
    last_updated: '2026-11-11T14:00:00Z',
  },
  {
    id: 2,
    employee: {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@visionariesai.com',
      department: { id: 1, name: 'Mathematics' },
    },
    leave_type: {
      id: 2,
      name: 'Sick Leave',
      max_days_per_year: 10,
    },
    year: 2026,
    total_allocated: 10,
    used_days: 2,
    remaining_days: 8,
    pending_days: 0,
    last_updated: '2026-11-11T14:00:00Z',
  },
  {
    id: 3,
    employee: {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@visionariesai.com',
      department: { id: 1, name: 'Mathematics' },
    },
    leave_type: {
      id: 3,
      name: 'Privilege / Earned Leave',
      max_days_per_year: 15,
    },
    year: 2026,
    total_allocated: 15,
    used_days: 5,
    remaining_days: 10,
    pending_days: 0,
    last_updated: '2026-11-11T14:00:00Z',
  },
];

const mockHolidays = [
  { id: 1, name: 'New Year Day', date: '2026-01-01', type: 'public', description: 'Celebration of the New Year', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 2, name: 'Republic Day', date: '2026-01-26', type: 'public', description: 'National Republic Day Celebrations', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 3, name: 'Maha Shivratri', date: '2026-02-16', type: 'optional', description: 'Festival holiday', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 4, name: 'Holi Break', date: '2026-03-04', type: 'public', description: 'Festival of colors', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 5, name: 'Good Friday', date: '2026-04-03', type: 'public', description: 'Christian religious observance', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 6, name: 'Summer Vacation Begins', date: '2026-05-01', type: 'public', description: 'Annual summer break for students', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 7, name: 'Independence Day', date: '2026-08-15', type: 'public', description: 'Flag hoisting ceremony and cultural events', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 8, name: 'Gandhi Jayanti', date: '2026-10-02', type: 'public', description: 'Mahatma Gandhi birthday commemoration', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 9, name: 'Diwali Festival Break', date: '2026-11-08', type: 'public', description: 'Deepavali festival holidays', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
  { id: 10, name: 'Christmas Day', date: '2026-12-25', type: 'public', description: 'Christmas holidays', is_active: true, branch: { id: 1, name: 'Main Campus (Central)' } },
];

module.exports = {
  mockLeaveRequests,
  mockLeaveQuotas,
  mockHolidays,
};
