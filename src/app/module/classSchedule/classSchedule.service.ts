import { IClassSchedule } from "./classSchedule.interface";
import ClassSchedule from "./classSchedule.model";

const createSchedule = async (payload: {
    date: string;
    startTime: string;
    trainer: string;
}) => {
    const existingSchedules = await ClassSchedule.find({ date: payload.date });

    // Check max 5 per day
    if (existingSchedules.length >= 5) {
        throw new Error('Maximum 5 classes can be scheduled per day');
    }

    const start = payload.startTime;
    const endHour = parseInt(start.split(':')[0]) + 2;
    const end = `${endHour.toString().padStart(2, '0')}:${start.split(':')[1]}`;

    const newSchedule = await ClassSchedule.create({
        date: payload.date,
        startTime: start,
        endTime: end,
        trainer: payload.trainer,
    });

    return newSchedule;
};


// Get All
const getAllSchedules = async () => {
    const result = await ClassSchedule.find()
    return result
};

// Update
const updateSchedule = async (id: string, data: Partial<IClassSchedule>) => {
    const result = await ClassSchedule.findByIdAndUpdate(id, data, { new: true });
    return result
};

// Delete
const deleteSchedule = async (id: string) => {
    const result = await ClassSchedule.findByIdAndDelete(id);
    return result
};


export const classScheduleService = {
    createSchedule,
    getAllSchedules,
    updateSchedule,
    deleteSchedule
}