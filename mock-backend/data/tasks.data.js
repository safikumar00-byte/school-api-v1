/**
 * Tasks & Submissions Mock Data
 */

const mockTasks = [
  {
    id: 1,
    title: 'Grade 10 Mathematics Term Test Blueprint Formulation',
    description: 'Prepare detailed question blueprint covering Algebra, Trigonometry, and Coordinate Geometry with mark breakdown.',
    from_date: '2026-11-10',
    due_date: '2026-11-20',
    created_by: { id: 101, name: 'Dr. Robert Chen' },
    assigned_users: [
      { id: 2, name: 'Sarah Johnson' },
      { id: 101, name: 'Dr. Robert Chen' },
    ],
    departments: [{ id: 1, name: 'Mathematics' }],
    standards: [{ id: 5, name: 'Grade 10' }],
    sections: [{ id: 1, name: 'Section A' }, { id: 2, name: 'Section B' }],
    is_submitted: false,
    submission_task_percentage: 60,
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Annual Science Fair Pavilion Layout Plan',
    description: 'Coordinate physical floor layout, electrical socket points, and fire safety clearances for 40 student exhibits.',
    from_date: '2026-11-12',
    due_date: '2026-11-24',
    created_by: { id: 102, name: 'Dr. Evelyn Reed' },
    assigned_users: [{ id: 102, name: 'Dr. Evelyn Reed' }, { id: 104, name: 'Alan Turing' }],
    departments: [{ id: 2, name: 'Science & Physics' }],
    standards: [{ id: 6, name: 'Grade 11' }, { id: 7, name: 'Grade 12' }],
    sections: [{ id: 4, name: 'Section A' }],
    is_submitted: true,
    submission_task_percentage: 100,
    priority: 'Medium',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'School Library Barcode Re-indexing & Audit',
    description: 'Scan and update barcode database for newly procured 350 books across reference and fiction aisles.',
    from_date: '2026-11-05',
    due_date: '2026-11-28',
    created_by: { id: 1, name: 'Alexander Hamilton' },
    assigned_users: [{ id: 6, name: 'David Miller' }],
    departments: [{ id: 5, name: 'School Administration & Finance' }],
    standards: [],
    sections: [],
    is_submitted: false,
    submission_task_percentage: 45,
    priority: 'Low',
    status: 'In Progress',
  },
];

const mockTaskSubmissions = [
  {
    id: 1,
    task: 1,
    task_title: 'Grade 10 Mathematics Term Test Blueprint Formulation',
    user: { id: 2, name: 'Sarah Johnson' },
    submission_date: '2026-11-15T14:30:00Z',
    content: 'Draft blueprint submitted with 4 sections: MCQs (20 marks), Short Answer (30 marks), Long Answer (30 marks).',
    status: 'Submitted',
    feedback: 'Well-structured. Please add 2 more application-based problems in Section C.',
    rating: 4.5,
  },
  {
    id: 2,
    task: 2,
    task_title: 'Annual Science Fair Pavilion Layout Plan',
    user: { id: 102, name: 'Dr. Evelyn Reed' },
    submission_date: '2026-11-14T11:00:00Z',
    content: 'Completed architectural CAD diagram of auditorium layout with dedicated robotics demonstration arena.',
    status: 'Approved',
    feedback: 'Approved by safety officer and principal.',
    rating: 5.0,
  },
];

module.exports = {
  mockTasks,
  mockTaskSubmissions,
};
