/**
 * Inventory & Stationery Mock Data
 */

const mockInventoryTypes = [
  { id: 1, name: 'IT & Computing', type: 'Electronics', branch: 1, academic_year: 1, is_active: true },
  { id: 2, name: 'Science Laboratory', type: 'Lab Equipment', branch: 1, academic_year: 1, is_active: true },
  { id: 3, name: 'Classroom Furniture', type: 'Furniture', branch: 1, academic_year: 1, is_active: true },
  { id: 4, name: 'Sports Gear & Games', type: 'Sports Equipment', branch: 1, academic_year: 1, is_active: true },
  { id: 5, name: 'General Stationery', type: 'Stationery', branch: 1, academic_year: 1, is_active: true },
];

const mockInventory = [
  {
    id: 1,
    name: 'Dell Latitude 3420 Laptops',
    description: 'Staff & computer lab student laptops Core i5 16GB RAM',
    quantity: 45,
    price: 52000,
    status: 'Available',
    is_stationary: false,
    inventory_type: { id: 1, name: 'IT & Computing', type: 'Electronics' },
    inventory_tracking: [
      { id: 1, status: 'Issued', quantity: 20, room: { name: 'Lab 1' } },
      { id: 2, status: 'Available', quantity: 25, room: { name: 'IT Store' } },
    ],
  },
  {
    id: 2,
    name: 'Epson Interactive Projectors',
    description: 'Ultra short throw interactive digital smart projectors',
    quantity: 12,
    price: 68000,
    status: 'Available',
    is_stationary: false,
    inventory_type: { id: 1, name: 'IT & Computing', type: 'Electronics' },
    inventory_tracking: [
      { id: 3, status: 'Issued', quantity: 10, room: { name: 'Room 101' } },
      { id: 4, status: 'Available', quantity: 2, room: { name: 'AV Store' } },
    ],
  },
  {
    id: 3,
    name: 'Olympus Binocular Compound Microscopes',
    description: 'High-resolution biological microscopes 1000x magnification',
    quantity: 30,
    price: 18500,
    status: 'Available',
    is_stationary: false,
    inventory_type: { id: 2, name: 'Science Laboratory', type: 'Lab Equipment' },
    inventory_tracking: [
      { id: 5, status: 'Issued', quantity: 25, room: { name: 'Biology Lab' } },
      { id: 6, status: 'Available', quantity: 5, room: { name: 'Lab Store' } },
    ],
  },
  {
    id: 4,
    name: 'Spalding Official Basketballs Size 7',
    description: 'Indoor/outdoor composite leather basketballs',
    quantity: 24,
    price: 2200,
    status: 'Available',
    is_stationary: false,
    inventory_type: { id: 4, name: 'Sports Gear & Games', type: 'Sports Equipment' },
    inventory_tracking: [
      { id: 7, status: 'Issued', quantity: 18, room: { name: 'Gymnasium' } },
      { id: 8, status: 'Available', quantity: 6, room: { name: 'Sports Room' } },
    ],
  },
  {
    id: 5,
    name: 'Student Double Desks & Chairs',
    description: 'Ergonomic dual study desks with book storage racks',
    quantity: 180,
    price: 4500,
    status: 'Available',
    is_stationary: false,
    inventory_type: { id: 3, name: 'Classroom Furniture', type: 'Furniture' },
    inventory_tracking: [
      { id: 9, status: 'Issued', quantity: 160, room: { name: 'Room 101' } },
      { id: 10, status: 'Available', quantity: 20, room: { name: 'Central Warehouse' } },
    ],
  },
];

const mockInventoryDashboard = {
  total_items: 291,
  low_stock_count: 3,
  available_items: 275,
  maintenance_items: 16,
};

const mockInventoryTracking = [
  { id: 1, inventory_item: 1, status: 'Issued', quantity: 20, room: { name: 'Lab 1' }, issued_to: 'Alan Turing', date: '2026-10-01' },
  { id: 2, inventory_item: 2, status: 'Issued', quantity: 10, room: { name: 'Room 101' }, issued_to: 'Sarah Johnson', date: '2026-10-05' },
  { id: 3, inventory_item: 3, status: 'Issued', quantity: 25, room: { name: 'Biology Lab' }, issued_to: 'Dr. Evelyn Reed', date: '2026-10-10' },
];

const mockStationery = [
  { id: 1, name: 'School Ruled Notebook 200 Pages', description: 'Hardcover bound notebooks with school logo watermark', price: 85, quantity: 500, is_active: true, branch: 1, academic_year: 1 },
  { id: 2, name: 'Mathematics Geometry Set Pro', description: 'Precision compass, divider, protractor, and rulers in metal case', price: 180, quantity: 250, is_active: true, branch: 1, academic_year: 1 },
  { id: 3, name: 'Science Practical Journal & Lab Record', description: 'Graph paper interleaved practical record books', price: 120, quantity: 300, is_active: true, branch: 1, academic_year: 1 },
  { id: 4, name: 'Art Sketchbook A3 Spiral Bound', description: 'Heavyweight cartridge paper for sketch and watercolor', price: 150, quantity: 180, is_active: true, branch: 1, academic_year: 1 },
];

const mockStationeryFees = [
  {
    id: 1,
    standard: {
      id: 5,
      name: 'Grade 10',
      stationary: [
        {
          id: 1,
          name: 'School Ruled Notebook 200 Pages',
          price: 85,
          quantity: 6,
          description: '6 Subject notebooks',
          is_active: true,
          stationary_type: { id: 1, name: 'Notebooks', description: 'Standard notebook' },
        },
        {
          id: 2,
          name: 'Mathematics Geometry Set Pro',
          price: 180,
          quantity: 1,
          description: 'Math instruments',
          is_active: true,
          stationary_type: { id: 2, name: 'Instruments', description: 'Geometry tool' },
        },
        {
          id: 3,
          name: 'Science Practical Journal & Lab Record',
          price: 120,
          quantity: 2,
          description: 'Physics & Chem records',
          is_active: true,
          stationary_type: { id: 3, name: 'Journals', description: 'Lab manual' },
        },
      ],
    },
    stationaies: [{ stationary_type: { name: 'General Pack' } }],
  },
];

module.exports = {
  mockInventoryTypes,
  mockInventory,
  mockInventoryDashboard,
  mockInventoryTracking,
  mockStationery,
  mockStationeryFees,
};
