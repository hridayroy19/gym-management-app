import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { bookingService } from './booking.service';
import sendResponse from '../../utils/sendResponse';

const bookSchedule = catchAsync(async (req, res) => {
    const { scheduleId, traineeId } = req.body;

    const result = await bookingService.createBooking(traineeId, scheduleId);

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.CREATED,
        message: 'Booking successful',
        data: result,
    });
});

const cancelBooking = catchAsync(async (req, res) => {
    const bookingId = req.params.id;
    const result = await bookingService.cancelBooking(bookingId);

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.OK,
        message: 'Booking cancelled successfully',
        data: result,
    });
});

const getMyBookings = catchAsync(async (req, res) => {
    const traineeId = req.params.id;

    const result = await bookingService.getTraineeBookings(traineeId);

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.OK,
        message: 'Bookings fetched successfully',
        data: result,
    });
});

export const bookingController = {
    bookSchedule,
    cancelBooking,
    getMyBookings
}