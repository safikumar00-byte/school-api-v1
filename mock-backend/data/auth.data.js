/**
 * Mock Auth Data & Configurations
 */

const mockOrganizations = [
  {
    domain: 'visionariesai.com',
    url: 'localhost:8000',
    organization_name: 'VisionariesAI Public School',
    is_active: true,
  },
  {
    domain: 'school.edu',
    url: 'localhost:8000',
    organization_name: 'Springdale International Academy',
    is_active: true,
  },
  {
    domain: 'demo.com',
    url: 'localhost:8000',
    organization_name: 'Demo SMS Campus',
    is_active: true,
  },
];

const mockUsers = [
  {
    id: 1,
    email: 'admin@visionariesai.com',
    username: 'admin',
    first_name: 'Alexander',
    last_name: 'Hamilton',
    is_superuser: true,
    is_staff: true,
    is_active: true,
    role: 'Admin',
    phone: '+91 98765 00001',
    token: 'mock-token-admin-12345',
    group: { id: 1, name: 'Admin' },
    branch: { id: 1, name: 'Main Campus (Central)' },
    created: '2024-01-01T00:00:00Z',
    date_joined: '2024-01-01T00:00:00Z',
    last_login: new Date().toISOString(),
  },
  {
    id: 2,
    email: 'teacher@visionariesai.com',
    username: 'teacher',
    first_name: 'Sarah',
    last_name: 'Johnson',
    is_superuser: false,
    is_staff: true,
    is_active: true,
    role: 'Teacher',
    phone: '+91 98765 00002',
    token: 'mock-token-teacher-12345',
    group: { id: 2, name: 'Teacher' },
    branch: { id: 1, name: 'Main Campus (Central)' },
    created: '2024-01-15T00:00:00Z',
    date_joined: '2024-01-15T00:00:00Z',
    last_login: new Date().toISOString(),
  },
  {
    id: 3,
    email: 'student@visionariesai.com',
    username: 'student',
    first_name: 'Aarav',
    last_name: 'Patel',
    is_superuser: false,
    is_staff: false,
    is_active: true,
    role: 'Student',
    phone: '+91 98765 00003',
    token: 'mock-token-student-12345',
    group: { id: 3, name: 'Student' },
    branch: { id: 1, name: 'Main Campus (Central)' },
    created: '2024-06-01T00:00:00Z',
    date_joined: '2024-06-01T00:00:00Z',
    last_login: new Date().toISOString(),
  },
];

module.exports = {
  mockOrganizations,
  mockUsers,
};
