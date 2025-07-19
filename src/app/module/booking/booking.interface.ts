import { Types } from 'mongoose';

export interface IBooking {
  trainee: Types.ObjectId;
  schedule: Types.ObjectId;
}
