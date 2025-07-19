/* eslint-disable @typescript-eslint/no-explicit-any */

import ClassSchedule from '../classSchedule/classSchedule.model'
import User from '../user/user.model'
import { Booking } from './booking.model'

const createBooking = async (traineeId: string, scheduleId: string) => {
  //  schedule exists
  const traineId = await User.findById(traineeId)
  if (!traineId) throw new Error('Trainee not found')

  const schedule = await ClassSchedule.findById(scheduleId)
  if (!schedule) throw new Error('Schedule not found')

  // already booked
  const existing = await Booking.findOne({
    trainee: traineeId,
    schedule: scheduleId,
  })
  if (existing) throw new Error('Already booked this schedule')

  //  max 10 trainees
  const count = await Booking.countDocuments({ schedule: scheduleId })
  if (count >= 10) throw new Error('This class is full')

  // Check time conflict
  const traineeBookings = await Booking.find({ trainee: traineeId }).populate(
    'schedule'
  )
  const hasConflict = traineeBookings.some((b) => {
    const sch: any = b.schedule
    return sch.date === schedule.date && sch.startTime === schedule.startTime
  })

  if (hasConflict) {
    throw new Error('You already have a class in this time slot')
  }

  const booking = await Booking.create({
    trainee: traineeId,
    schedule: scheduleId,
  })
  return booking
}

const cancelBooking = async (bookingId: string) => {
  const booking = await Booking.findByIdAndDelete(bookingId)
  if (!booking) {
    throw new Error('Booking not found')
  }
  return booking
}

const getTraineeBookings = async (traineeId: string) => {
  return await Booking.find({ trainee: traineeId }).populate('schedule')
}

export const bookingService = {
  createBooking,
  cancelBooking,
  getTraineeBookings,
}
