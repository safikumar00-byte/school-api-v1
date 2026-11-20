/**
 * Hostel Management Mock Data
 */

const mockHostelRooms = [
  {
    id: 1,
    room_number: 'H-101',
    floor: 1,
    capacity: 4,
    occupied: 3,
    available: 1,
    room_type: 'AC Deluxe Quad',
    amenities: ['Air Conditioning', 'Attached Bath', 'Study Tables', 'High-Speed Wi-Fi', 'Wardrobes'],
    status: 'Available',
    branch: { id: 1, name: 'Main Campus (Central)' },
  },
  {
    id: 2,
    room_number: 'H-102',
    floor: 1,
    capacity: 2,
    occupied: 2,
    available: 0,
    room_type: 'AC Double Sharing',
    amenities: ['Air Conditioning', 'Attached Bath', 'Balcony', 'Study Tables', 'Wi-Fi'],
    status: 'Full',
    branch: { id: 1, name: 'Main Campus (Central)' },
  },
  {
    id: 3,
    room_number: 'H-201',
    floor: 2,
    capacity: 3,
    occupied: 1,
    available: 2,
    room_type: 'Standard Triple',
    amenities: ['Ceiling Fans', 'Shared Bath', 'Study Desks', 'Wi-Fi'],
    status: 'Available',
    branch: { id: 1, name: 'Main Campus (Central)' },
  },
  {
    id: 4,
    room_number: 'H-202',
    floor: 2,
    capacity: 4,
    occupied: 0,
    available: 4,
    room_type: 'Standard Quad',
    amenities: ['Ceiling Fans', 'Attached Bath', 'Study Desks'],
    status: 'Available',
    branch: { id: 1, name: 'Main Campus (Central)' },
  },
];

const mockHostelBeds = [
  { id: 1, bed_number: 'B-101-A', room: 1, student: { id: 7, name: 'Aarav Patel', roll_number: '10A01' }, is_occupied: true },
  { id: 2, bed_number: 'B-101-B', room: 1, student: { id: 8, name: 'Rohan Gupta', roll_number: '10A03' }, is_occupied: true },
  { id: 3, bed_number: 'B-101-C', room: 1, student: { id: 9, name: 'Dev Malhotra', roll_number: '10A07' }, is_occupied: true },
  { id: 4, bed_number: 'B-101-D', room: 1, student: null, is_occupied: false },
];

const mockHostelVisitors = [
  {
    id: 1,
    visitor_name: 'Suresh Patel',
    student_name: 'Aarav Patel',
    phone_number: '+91 98765 99991',
    purpose: 'Weekend family visit and delivering study materials',
    visit_date: '2026-11-12',
    in_time: '14:30',
    out_time: '17:00',
    room_number: 'H-101',
    status: 'Checked Out',
    id_proof: 'National ID (Aadhaar)',
  },
  {
    id: 2,
    visitor_name: 'Meenakshi Sharma',
    student_name: 'Ananya Sharma',
    phone_number: '+91 98765 88882',
    purpose: 'Medical care and medicine drop-off',
    visit_date: '2026-11-13',
    in_time: '10:15',
    out_time: null,
    room_number: 'H-102',
    status: 'Inside Campus',
    id_proof: 'Driving License',
  },
];

const mockHostelMealPlans = [
  {
    id: 1,
    name: 'Standard Weekly Balanced Meal Plan',
    meal_type: 'Breakfast, Lunch, Snacks & Dinner',
    day_of_week: 'All Days',
    menu_items: 'Nutritious vegetarian & non-veg options, fresh fruit salads, dairy, and multi-cuisine dinners',
    price: 4500,
    is_active: true,
  },
  {
    id: 2,
    name: 'Vegetarian Pure Nutrition Plan',
    meal_type: 'Full Board (4 meals)',
    day_of_week: 'All Days',
    menu_items: 'High-protein lentil soups, paneer specialties, green veggies, rice, chapatis, and desserts',
    price: 4200,
    is_active: true,
  },
];

const mockHostelProducts = [
  { id: 1, name: 'Cotton Bed Sheet & Pillowcase Set', category: 'Linen', quantity: 120, unit_price: 650, minimum_stock: 30, status: 'In Stock' },
  { id: 2, name: 'Plush Bath Towels (Microfiber)', category: 'Linen', quantity: 95, unit_price: 320, minimum_stock: 25, status: 'In Stock' },
  { id: 3, name: 'Floor Disinfectant & Sanitizer (5L)', category: 'Hygiene & Cleaning', quantity: 18, unit_price: 850, minimum_stock: 10, status: 'In Stock' },
  { id: 4, name: 'First Aid Kit Medical Refill Box', category: 'Health & Safety', quantity: 8, unit_price: 1200, minimum_stock: 5, status: 'In Stock' },
];

module.exports = {
  mockHostelRooms,
  mockHostelBeds,
  mockHostelVisitors,
  mockHostelMealPlans,
  mockHostelProducts,
};
