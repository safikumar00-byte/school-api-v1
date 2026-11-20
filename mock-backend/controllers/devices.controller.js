/**
 * IoT Devices, Live Sensor Readings & Energy Management (EMS) Controller
 */
const {
  mockDevices,
  mockLiveDeviceReadings,
  mockDeviceThresholds,
  mockEmsRooms,
  mockEmsSchedules,
  mockAmenities,
  mockAmenitiesTypes,
} = require('../data/devices.data');
const { formatPaginatedResponse } = require('../utils/response');

let devices = [...mockDevices];
let liveReadings = [...mockLiveDeviceReadings];
let emsSchedules = [...mockEmsSchedules];
let amenities = [...mockAmenities];

function getDevices(req, res) {
  return res.json(formatPaginatedResponse(req, devices));
}

function getAllDevices(req, res) {
  return res.json(devices);
}

function getDeviceReadings(req, res) {
  return res.json(formatPaginatedResponse(req, liveReadings));
}

function getLiveDeviceReadings(req, res) {
  // Update timestamp to now so weather screen gets real-time reading
  const updated = liveReadings.map((r) => ({
    ...r,
    timestamp: new Date().toISOString(),
  }));
  return res.json(updated);
}

function getAllDeviceReadings(req, res) {
  return res.json(formatPaginatedResponse(req, liveReadings));
}

function getDeviceThresholds(req, res) {
  return res.json(formatPaginatedResponse(req, mockDeviceThresholds));
}

function checkAlerts(req, res) {
  return res.json({ alerts: [] });
}

function getDeviceRegistry(req, res) {
  return res.json(formatPaginatedResponse(req, devices));
}

function getDomains(req, res) {
  return res.json(formatPaginatedResponse(req, [
    { id: 1, name: 'visionariesai.com', is_active: true },
  ]));
}

// EMS
function getEmsRooms(req, res) {
  return res.json(formatPaginatedResponse(req, mockEmsRooms));
}

function getRoomData(req, res) {
  return res.json({
    total_power_kw: 103.6,
    avg_temp: 23.1,
    rooms_active: 4,
  });
}

function getEmsSchedules(req, res) {
  return res.json(formatPaginatedResponse(req, emsSchedules));
}

function createEmsSchedule(req, res) {
  const newItem = {
    id: emsSchedules.length + 1,
    ...req.body,
    is_active: true,
  };
  emsSchedules.push(newItem);
  return res.status(201).json(newItem);
}

function controlNow(req, res) {
  return res.json({ detail: 'Command sent to EMS controller successfully.' });
}

// Amenities
function getAmenities(req, res) {
  return res.json(formatPaginatedResponse(req, amenities));
}

function createAmenity(req, res) {
  const newItem = {
    id: amenities.length + 1,
    name: req.body.name,
    type: req.body.type || 'General',
    is_active: true,
  };
  amenities.push(newItem);
  return res.status(201).json(newItem);
}

function getAmenitiesTypes(req, res) {
  return res.json(formatPaginatedResponse(req, mockAmenitiesTypes));
}

// Biometric endpoints
function getBiometricData(req, res) {
  return res.json(formatPaginatedResponse(req, []));
}

function uploadBiometricData(req, res) {
  return res.status(201).json({ detail: 'Biometric records uploaded successfully.' });
}

function updateBiometricData(req, res) {
  return res.json({ detail: 'Biometric data updated.' });
}

function deleteBiometricData(req, res) {
  return res.json({ detail: 'Biometric record deleted.' });
}

module.exports = {
  getDevices,
  getAllDevices,
  getDeviceReadings,
  getLiveDeviceReadings,
  getAllDeviceReadings,
  getDeviceThresholds,
  checkAlerts,
  getDeviceRegistry,
  getDomains,
  getEmsRooms,
  getRoomData,
  getEmsSchedules,
  createEmsSchedule,
  controlNow,
  getAmenities,
  createAmenity,
  getAmenitiesTypes,
  getBiometricData,
  uploadBiometricData,
  updateBiometricData,
  deleteBiometricData,
};
