/**
 * Transport Management Mock Data
 */

const mockTransportVehicles = [
  {
    id: 1,
    name: 'School Bus 01',
    type: 'Heavy Passenger Bus',
    vehicle_type: 'Bus',
    seats: 45,
    total_seats: 45,
    registration_number: 'KA-01-EQ-1001',
    license_plate: 'KA-01-EQ-1001',
    driver_id: 1,
    status: 'active',
    date_of_joining: '2023-05-10',
    joining_date: '2023-05-10',
    license_expiry: '2028-05-10',
  },
  {
    id: 2,
    name: 'School Bus 02',
    type: 'Heavy Passenger Bus',
    vehicle_type: 'Bus',
    seats: 45,
    total_seats: 45,
    registration_number: 'KA-01-EQ-1002',
    license_plate: 'KA-01-EQ-1002',
    driver_id: 2,
    status: 'active',
    date_of_joining: '2023-06-15',
    joining_date: '2023-06-15',
    license_expiry: '2028-06-15',
  },
  {
    id: 3,
    name: 'Mini Bus 03 (North Express)',
    type: 'Mini Coach',
    vehicle_type: 'Mini Bus',
    seats: 25,
    total_seats: 25,
    registration_number: 'KA-01-EQ-1003',
    license_plate: 'KA-01-EQ-1003',
    driver_id: 3,
    status: 'active',
    date_of_joining: '2024-01-10',
    joining_date: '2024-01-10',
    license_expiry: '2029-01-10',
  },
];

const mockTransportTrips = [
  {
    id: 1,
    vehicle_name: 'School Bus 01',
    primary_driver_name: 'Rajesh Kumar',
    secondary_driver_name: 'Sombir Singh',
    start_point: 'Koramangala 4th Block',
    end_point: 'Main Campus Central Gate',
    passenger_count: 42,
    total_passengers: 42,
    status: 'active',
    departure_time: '07:15 AM',
    parking_location: 'Central Campus Bus Bay 1',
    stops: [
      { stop_name: 'Koramangala BDA Complex' },
      { stop_name: 'Sony World Junction' },
      { stop_name: 'Domlur Flyover' },
      { stop_name: 'Indiranagar 100ft Road' },
      { stop_name: 'School Main Gate' },
    ],
  },
  {
    id: 2,
    vehicle_name: 'School Bus 02',
    primary_driver_name: 'Ahmed Khan',
    secondary_driver_name: 'Ramesh Gowda',
    start_point: 'Hebbal Flyover Junction',
    end_point: 'Main Campus Central Gate',
    passenger_count: 38,
    total_passengers: 38,
    status: 'active',
    departure_time: '07:20 AM',
    parking_location: 'Central Campus Bus Bay 2',
    stops: [
      { stop_name: 'Hebbal Lake Road' },
      { stop_name: 'RT Nagar Post Office' },
      { stop_name: 'Cantonment Station' },
      { stop_name: 'MG Road Metro' },
      { stop_name: 'School Main Gate' },
    ],
  },
];

const mockTransportDrivers = [
  { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 00010', license_number: 'KA01-2015-009871', experience_years: 12, is_active: true },
  { id: 2, name: 'Ahmed Khan', phone: '+91 98765 00012', license_number: 'KA01-2018-005432', experience_years: 9, is_active: true },
  { id: 3, name: 'Sombir Singh', phone: '+91 98765 00013', license_number: 'KA01-2020-001290', experience_years: 7, is_active: true },
];

module.exports = {
  mockTransportVehicles,
  mockTransportTrips,
  mockTransportDrivers,
};
