// models/schedule.model.ts
import { Schema, model } from 'mongoose';
import { IClassSchedule } from './classSchedule.interface';

const classScheduleSchema = new Schema<IClassSchedule>({
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const ClassSchedule = model('ClassSchedule', classScheduleSchema);
export default ClassSchedule;
