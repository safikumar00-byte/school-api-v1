/**
 * Chat, Documents & Support Queries Mock Data
 */

const mockChatPartners = [
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@visionariesai.com', role: 'Mathematics Teacher', is_online: true },
  { id: 3, name: 'Dr. Robert Chen', email: 'robert.chen@visionariesai.com', role: 'HOD Mathematics', is_online: false },
  { id: 4, name: 'Dr. Evelyn Reed', email: 'evelyn.reed@visionariesai.com', role: 'Science Department Head', is_online: true },
  { id: 5, name: 'Alan Turing', email: 'alan.turing@visionariesai.com', role: 'Computer Science Faculty', is_online: true },
  { id: 6, name: 'David Miller', email: 'david.miller@visionariesai.com', role: 'Accounts Officer', is_online: false },
];

const mockChatMessages = [
  {
    id: 1,
    message: 'Hello! Have you reviewed the Grade 10 calculus worksheet?',
    sender: 2,
    receiver: 1,
    timestamp: '2026-11-13T09:10:00Z',
    is_read: true,
  },
  {
    id: 2,
    message: 'Yes Sarah, the problems look well calibrated for the upcoming test.',
    sender: 1,
    receiver: 2,
    timestamp: '2026-11-13T09:12:00Z',
    is_read: true,
  },
  {
    id: 3,
    message: 'Great! I will print copies for Section A and Section B this afternoon.',
    sender: 2,
    receiver: 1,
    timestamp: '2026-11-13T09:15:00Z',
    is_read: false,
  },
];

const mockDocuments = [
  {
    id: 1,
    title: 'Academic Calendar 2026-2027 Official',
    description: 'Detailed term schedules, examination blocks, and holiday listing for all grades.',
    file_url: 'https://visionariesai.com/docs/academic-calendar-2026.pdf',
    file_type: 'PDF',
    file_size: 2450000,
    uploaded_by: { first_name: 'Alexander', last_name: 'Hamilton' },
    created: '2026-10-15T09:00:00Z',
    modified: '2026-10-15T09:00:00Z',
    is_public: true,
    category: 'Academic',
  },
  {
    id: 2,
    title: 'School Safety & Emergency Evacuation Protocol',
    description: 'Standard operating procedures for fire, earthquake, and medical emergencies.',
    file_url: 'https://visionariesai.com/docs/safety-manual.pdf',
    file_type: 'PDF',
    file_size: 1850000,
    uploaded_by: { first_name: 'David', last_name: 'Miller' },
    created: '2026-09-01T11:00:00Z',
    modified: '2026-09-01T11:00:00Z',
    is_public: true,
    category: 'Administrative',
  },
  {
    id: 3,
    title: 'Student Code of Conduct & Honor Policy',
    description: 'Guidelines on integrity, digital citizenship, attendance, and campus etiquette.',
    file_url: 'https://visionariesai.com/docs/code-of-conduct.pdf',
    file_type: 'PDF',
    file_size: 1200000,
    uploaded_by: { first_name: 'Sarah', last_name: 'Johnson' },
    created: '2026-08-20T10:30:00Z',
    modified: '2026-08-20T10:30:00Z',
    is_public: true,
    category: 'Circulars',
  },
  {
    id: 4,
    title: 'Grade 10 Mathematics Syllabus & Formula Compendium',
    description: 'Reference sheet of algebraic identities, theorems, and trigonometric values.',
    file_url: 'https://visionariesai.com/docs/grade-10-math-compendium.pdf',
    file_type: 'PDF',
    file_size: 3100000,
    uploaded_by: { first_name: 'Dr. Robert', last_name: 'Chen' },
    created: '2026-11-02T14:15:00Z',
    modified: '2026-11-02T14:15:00Z',
    is_public: true,
    category: 'Academic',
  },
];

const mockSupportQueries = [
  {
    id: 1,
    subject: 'Interactive Projector In Room 102 HDMI Port Loose',
    description: 'Display flickers when connecting laptop via HDMI cable during Period 2.',
    comment: 'Tech',
    priority: 'Medium',
    status: 'In Progress',
    assigned_to: { id: 5, name: 'Alan Turing' },
    created: '2026-11-12T10:15:00Z',
    modified: '2026-11-12T14:00:00Z',
  },
  {
    id: 2,
    subject: 'Fee Receipt Duplicate Request for Term 1',
    description: 'Parent requested official stamped tax exemption duplicate receipt for Term 1.',
    comment: 'Operation',
    priority: 'Low',
    status: 'Open',
    assigned_to: { id: 6, name: 'David Miller' },
    created: '2026-11-13T08:45:00Z',
    modified: '2026-11-13T08:45:00Z',
  },
  {
    id: 3,
    subject: 'Science Lab 2 Microscope Light Source Fuse Replacement',
    description: 'Microscope #14 illumination bulb failed during biology class.',
    comment: 'Subject',
    priority: 'High',
    status: 'Closed',
    assigned_to: { id: 4, name: 'Dr. Evelyn Reed' },
    created: '2026-11-08T11:20:00Z',
    modified: '2026-11-09T16:00:00Z',
  },
];

module.exports = {
  mockChatPartners,
  mockChatMessages,
  mockDocuments,
  mockSupportQueries,
};
