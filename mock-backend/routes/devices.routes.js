const express = require('express');
const router = express.Router();
const devicesController = require('../controllers/devices.controller');

// Devices
router.get('/devices/', devicesController.getDevices);
router.get('/devices/all-devices/', devicesController.getAllDevices);
router.get('/device-registry/', devicesController.getDeviceRegistry);
router.get('/domains/', devicesController.getDomains);

// Device Readings (Weather uses live-device-readings)
router.get('/device-readings/', devicesController.getDeviceReadings);
router.get('/device-readings/live-device-readings/', devicesController.getLiveDeviceReadings);
router.get('/all-device-readings/', devicesController.getAllDeviceReadings);
router.get('/device-thresholds/', devicesController.getDeviceThresholds);
router.get('/device-thresholds/check-alerts/', devicesController.checkAlerts);

// EMS
router.get('/ems-rooms/', devicesController.getEmsRooms);
router.get('/ems-rooms/get-room-data/', devicesController.getRoomData);
router.get('/ems-schedules/', devicesController.getEmsSchedules);
router.post('/ems-schedules/', devicesController.createEmsSchedule);
router.post('/ems-schedules/control-now/', devicesController.controlNow);

// Amenities
router.get('/amenities/', devicesController.getAmenities);
router.post('/amenities/', devicesController.createAmenity);
router.get('/amenities-types/', devicesController.getAmenitiesTypes);

// Biometric
router.get('/biometric/', devicesController.getBiometricData);
router.post('/biometric/upload-biometric-data/', devicesController.uploadBiometricData);
router.patch('/biometric/update-biometric-data/', devicesController.updateBiometricData);
router.post('/biometric/delete-biometric-data/', devicesController.deleteBiometricData);

module.exports = router;
