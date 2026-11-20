/**
 * IoT Devices, Live Sensor Readings & Energy Management (EMS) Mock Data
 */

const mockDevices = [
  { id: 1, name: 'Campus Main Weather Station', device_type: 'Environmental Sensor', location: 'Rooftop Science Block', status: 'Online', is_active: true },
  { id: 2, name: 'Room 101 Climate Monitor', device_type: 'Indoor Sensor', location: 'Academic Block A', status: 'Online', is_active: true },
  { id: 3, name: 'Biology Lab IoT Sensor Hub', device_type: 'Lab Environmental', location: 'Science Block Ground Floor', status: 'Online', is_active: true },
  { id: 4, name: 'Server Room HVAC Controller', device_type: 'HVAC Sensor', location: 'IT Data Center', status: 'Online', is_active: true },
];

const mockLiveDeviceReadings = [
  {
    id: 1,
    device: { id: 1, name: 'Campus Main Weather Station' },
    reading_type: 'temperature',
    reading_value: 27.5,
    unit: '°C',
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    device: { id: 1, name: 'Campus Main Weather Station' },
    reading_type: 'humidity',
    reading_value: 58.0,
    unit: '%',
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    device: { id: 1, name: 'Campus Main Weather Station' },
    reading_type: 'pressure',
    reading_value: 1012.4,
    unit: 'hPa',
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    device: { id: 1, name: 'Campus Main Weather Station' },
    reading_type: 'air_quality_aqi',
    reading_value: 42,
    unit: 'AQI',
    timestamp: new Date().toISOString(),
  },
  {
    id: 5,
    device: { id: 1, name: 'Campus Main Weather Station' },
    reading_type: 'wind_speed',
    reading_value: 12.5,
    unit: 'km/h',
    timestamp: new Date().toISOString(),
  },
];

const mockDeviceThresholds = [
  { id: 1, device: 1, reading_type: 'temperature', min_value: 18.0, max_value: 38.0, is_alert_enabled: true },
  { id: 2, device: 1, reading_type: 'humidity', min_value: 30.0, max_value: 85.0, is_alert_enabled: true },
];

const mockEmsRooms = [
  { id: 1, name: 'Main Auditorium', energy_consumption_kwh: 48.5, temperature: 22.0, lights_on: true, ac_on: true, status: 'Active' },
  { id: 2, name: 'Computer Lab 1', energy_consumption_kwh: 32.1, temperature: 21.5, lights_on: true, ac_on: true, status: 'Active' },
  { id: 3, name: 'Library Reading Hall', energy_consumption_kwh: 14.8, temperature: 24.0, lights_on: true, ac_on: false, status: 'Active' },
  { id: 4, name: 'Staff Common Room', energy_consumption_kwh: 8.2, temperature: 25.0, lights_on: true, ac_on: false, status: 'Active' },
];

const mockEmsSchedules = [
  { id: 1, room: 1, title: 'Auditorium Morning Assembly Prep', start_time: '08:00:00', end_time: '09:30:00', is_active: true, days: ['Monday', 'Wednesday', 'Friday'] },
  { id: 2, room: 2, title: 'Lab 1 AC Pre-cooling', start_time: '08:15:00', end_time: '16:00:00', is_active: true, days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
];

const mockAmenities = [
  { id: 1, name: 'Smart Interactive Board', type: 'Technology', is_active: true },
  { id: 2, name: 'Inverter Air Conditioning', type: 'Climate Control', is_active: true },
  { id: 3, name: 'Gigabit LAN & Wi-Fi 6', type: 'Network', is_active: true },
  { id: 4, name: 'Emergency PA Audio System', type: 'Safety', is_active: true },
];

const mockAmenitiesTypes = [
  { id: 1, name: 'Technology & Audio-Visual' },
  { id: 2, name: 'Climate Control & Ventilation' },
  { id: 3, name: 'High-Speed Networking' },
  { id: 4, name: 'Safety & Security' },
];

module.exports = {
  mockDevices,
  mockLiveDeviceReadings,
  mockDeviceThresholds,
  mockEmsRooms,
  mockEmsSchedules,
  mockAmenities,
  mockAmenitiesTypes,
};
