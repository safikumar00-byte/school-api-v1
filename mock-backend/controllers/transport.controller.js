/**
 * Transport Management Controller
 */
const {
  mockTransportVehicles,
  mockTransportTrips,
  mockTransportDrivers,
} = require('../data/transport.data');
const { formatPaginatedResponse } = require('../utils/response');

let vehicles = [...mockTransportVehicles];
let trips = [...mockTransportTrips];
let drivers = [...mockTransportDrivers];

function getVehicles(req, res) {
  return res.json(formatPaginatedResponse(req, vehicles));
}

function createVehicle(req, res) {
  const newItem = {
    id: vehicles.length + 1,
    name: req.body.name || 'School Bus',
    type: req.body.type || 'Bus',
    vehicle_type: req.body.vehicle_type || 'Bus',
    seats: req.body.seats || 40,
    total_seats: req.body.seats || 40,
    registration_number: req.body.registration_number || req.body.license_plate || 'KA-01-EQ-9999',
    license_plate: req.body.license_plate || 'KA-01-EQ-9999',
    status: 'active',
    date_of_joining: new Date().toISOString().split('T')[0],
  };
  vehicles.push(newItem);
  return res.status(201).json(newItem);
}

function getTrips(req, res) {
  return res.json(formatPaginatedResponse(req, trips));
}

function createTrip(req, res) {
  const newItem = {
    id: trips.length + 1,
    vehicle_name: req.body.vehicle_name || 'School Bus 01',
    primary_driver_name: req.body.primary_driver_name || 'Driver',
    start_point: req.body.start_point || 'Start',
    end_point: req.body.end_point || 'Campus',
    passenger_count: req.body.passenger_count || 0,
    status: 'active',
    departure_time: req.body.departure_time || '07:30 AM',
    stops: req.body.stops || [],
  };
  trips.push(newItem);
  return res.status(201).json(newItem);
}

function getDrivers(req, res) {
  return res.json(formatPaginatedResponse(req, drivers));
}

module.exports = {
  getVehicles,
  createVehicle,
  getTrips,
  createTrip,
  getDrivers,
};
