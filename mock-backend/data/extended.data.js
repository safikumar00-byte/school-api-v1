/**
 * Extended Screens Mock Data (Wallet, Food Court, Library, Sports, Timesheet, Invoices, etc.)
 */

const mockWallet = {
  balance: 4850.0,
  currency: 'INR',
  currency_symbol: '₹',
  account_number: 'VA-WAL-789012',
  recent_transactions: [
    { id: 'TXN101', description: 'Cafeteria Lunch Combo', amount: -120.0, date: '2026-11-13T12:45:00Z', type: 'debit', category: 'Food' },
    { id: 'TXN102', description: 'Bookstore Geometry Set', amount: -180.0, date: '2026-11-12T15:20:00Z', type: 'debit', category: 'Stationery' },
    { id: 'TXN103', description: 'Monthly Pocket Allowance Top-up', amount: 2500.0, date: '2026-11-10T10:00:00Z', type: 'credit', category: 'Top-up' },
    { id: 'TXN104', description: 'Library Late Return Fee', amount: -25.0, date: '2026-11-05T14:10:00Z', type: 'debit', category: 'Fines' },
  ],
};

const mockFoodCourt = {
  categories: ['All', 'Breakfast', 'Main Course', 'Snacks & Bakery', 'Beverages', 'Healthy Bowls'],
  menu: [
    { id: 1, name: 'South Indian Dosa Platter', category: 'Breakfast', price: 65, rating: 4.8, is_available: true, calories: 340, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc' },
    { id: 2, name: 'Paneer Butter Masala with Paratha', category: 'Main Course', price: 110, rating: 4.9, is_available: true, calories: 520, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7' },
    { id: 3, name: 'Vegetable Grilled Sandwich', category: 'Snacks & Bakery', price: 55, rating: 4.6, is_available: true, calories: 280, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af' },
    { id: 4, name: 'Fresh Orange & Carrot Juice', category: 'Beverages', price: 40, rating: 4.7, is_available: true, calories: 120, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423' },
    { id: 5, name: 'Mediterranean Quinoa Salad Bowl', category: 'Healthy Bowls', price: 95, rating: 4.8, is_available: true, calories: 310, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
  ],
  orders: [
    { id: 'ORD-5401', items: [{ name: 'Vegetable Grilled Sandwich', qty: 1, price: 55 }], total: 55, status: 'Completed', date: '2026-11-13T10:30:00Z' },
  ],
};

const mockSports = {
  teams: [
    { id: '1', name: 'Thunderbolts Basketball', sport: 'Basketball', captain: 'Dev Malhotra', coach: 'Vikram Singh', members: ['Dev M.', 'Kabir M.', 'Rohan G.', 'Aditya N.', 'Aarav P.'], wins: 14, losses: 2, draws: 0 },
    { id: '2', name: 'Campus Strikers Football', sport: 'Football', captain: 'Kabir Mehta', coach: 'Vikram Singh', members: ['Kabir M.', 'Dev M.', 'Aarav P.', 'Siddharth R.'], wins: 11, losses: 3, draws: 2 },
    { id: '3', name: 'Golden Shuttles Badminton', sport: 'Badminton', captain: 'Ananya Sharma', coach: 'Priya Verma', members: ['Ananya S.', 'Diya V.', 'Pooja I.'], wins: 18, losses: 1, draws: 0 },
  ],
  matches: [
    { id: 'M-1', teamA: 'Thunderbolts Basketball', teamB: 'Bishop Cotton High', date: '2026-11-21', time: '10:00 AM', location: 'Indoor Sports Arena', status: 'scheduled', notes: 'Inter-School Quarter Finals' },
    { id: 'M-2', teamA: 'Campus Strikers Football', teamB: 'Greenwood High', date: '2026-11-22', time: '03:30 PM', location: 'Main Football Turf', status: 'scheduled', notes: 'Zone Championship Match' },
  ],
  recommendations: [
    { id: '1', type: 'progress', title: 'Aerobic Endurance Sprint Training', description: 'Recommended for soccer wingers to boost 80m sprint recovery time', progress: 75, difficulty: 'intermediate', category: 'Conditioning' },
    { id: '2', type: 'learning', title: 'Tactical Free-Throw Routine', description: 'Step-by-step kinetic shooting alignment technique', progress: 40, difficulty: 'beginner', category: 'Basketball' },
  ],
};

const mockLibrary = {
  resources: [
    { id: 1, title: 'Principles of Modern Physics (Vol 1)', author: 'Halliday & Resnick', isbn: '978-0470547946', category: 'Physics', available_copies: 5, total_copies: 8, location_rack: 'Rack P-04' },
    { id: 2, title: 'Calculus and Analytical Geometry', author: 'George B. Thomas', isbn: '978-0201441413', category: 'Mathematics', available_copies: 3, total_copies: 6, location_rack: 'Rack M-02' },
    { id: 3, title: 'Introduction to Algorithms (4th Edition)', author: 'Cormen, Leiserson, Rivest', isbn: '978-0262046305', category: 'Computer Science', available_copies: 2, total_copies: 4, location_rack: 'Rack CS-01' },
    { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0060935467', category: 'Literature', available_copies: 7, total_copies: 10, location_rack: 'Rack LIT-03' },
  ],
  ecourses: [
    { id: 1, title: 'Mastering Python & Machine Learning for Beginners', instructor: 'Alan Turing', duration: '12 Hours', modules_count: 8, rating: 4.9, enrolled_students: 142, progress_percent: 65 },
    { id: 2, title: 'Astrophysics & Solar System Planetary Science', instructor: 'Dr. Evelyn Reed', duration: '9 Hours', modules_count: 6, rating: 4.8, enrolled_students: 98, progress_percent: 30 },
    { id: 3, title: 'Advanced Calculus Problem Solving Masterclass', instructor: 'Dr. Robert Chen', duration: '15 Hours', modules_count: 10, rating: 4.9, enrolled_students: 180, progress_percent: 85 },
  ],
};

const mockTimesheet = [
  { id: 1, date: '2026-11-13', hours_worked: 7.5, project: 'Grade 10 Curriculum Delivery', task_description: 'Taught Calculus & Trigonometry; conducted problem review session', status: 'Submitted' },
  { id: 2, date: '2026-11-12', hours_worked: 8.0, project: 'Science Exhibition Preparation', task_description: 'Supervised Grade 11 robotics hardware assembly in Lab 1', status: 'Approved' },
  { id: 3, date: '2026-11-11', hours_worked: 7.0, project: 'Departmental Faculty Meeting', task_description: 'Reviewed exam blueprint questions and attendance statistics', status: 'Approved' },
];

const mockInvoices = [
  { id: 1, invoice_number: 'INV-2026-0891', customer_name: 'Apex Scientific Instruments', amount: 42500, due_date: '2026-11-30', status: 'Paid', issue_date: '2026-11-05' },
  { id: 2, invoice_number: 'INV-2026-0892', customer_name: 'Metro Sports Supply Co.', amount: 16800, due_date: '2026-12-05', status: 'Pending', issue_date: '2026-11-10' },
];

const mockExpenseClaims = [
  { id: 1, claim_title: 'Mathematics Conference Registration & Travel', amount: 4800, date: '2026-11-04', status: 'Approved', claimant: 'Sarah Johnson', category: 'Professional Development' },
  { id: 2, claim_title: 'Urgent Lab Pipettes Emergency Purchase', amount: 1250, date: '2026-11-09', status: 'Reimbursed', claimant: 'Dr. Evelyn Reed', category: 'Lab Supplies' },
];

const mockRewards = {
  points_balance: 1420,
  rank: 3,
  badges: [
    { id: 1, name: 'Perfect Attendance Star', icon: '⭐', description: '100% attendance maintained for consecutive 90 days', earned_on: '2026-10-31' },
    { id: 2, name: 'Math Olympiad Gold Scholar', icon: '🏆', description: 'Scored top 1% in zonal mathematics benchmark contest', earned_on: '2026-10-15' },
    { id: 3, name: 'Eco-Champion Volunteer', icon: '🌱', description: 'Participated in campus tree plantation and energy saving drive', earned_on: '2026-09-22' },
  ],
  leaderboard: [
    { rank: 1, name: 'Ananya Sharma', points: 1680, avatar: 'A' },
    { rank: 2, name: 'Dev Malhotra', points: 1540, avatar: 'D' },
    { rank: 3, name: 'Aarav Patel', points: 1420, avatar: 'A' },
    { rank: 4, name: 'Diya Verma', points: 1390, avatar: 'D' },
    { rank: 5, name: 'Kabir Mehta', points: 1250, avatar: 'K' },
  ],
};

module.exports = {
  mockWallet,
  mockFoodCourt,
  mockSports,
  mockLibrary,
  mockTimesheet,
  mockInvoices,
  mockExpenseClaims,
  mockRewards,
};
