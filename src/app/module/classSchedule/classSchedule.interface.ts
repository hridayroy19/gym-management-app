import { Types } from 'mongoose';

export interface IClassSchedule {
  _id?: Types.ObjectId;
  date: string; 
  startTime: string; 
  endTime: string;   
  trainer: Types.ObjectId; 
  classTitle: string; 
}
