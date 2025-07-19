import express from 'express';
import auth from '../../middlewares/auth';
import { bookingController } from './booking.controller';

const bookingrouter = express.Router();

bookingrouter.post('/booked', auth("TRAINEE"), bookingController.bookSchedule);
bookingrouter.delete('/cancel/:id', auth("TRAINEE"), bookingController.cancelBooking);
bookingrouter.get('/:id', auth("TRAINEE"), bookingController.getMyBookings);

export default bookingrouter;
