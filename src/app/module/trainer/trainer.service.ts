/* eslint-disable @typescript-eslint/no-explicit-any */

import User from '../user/user.model'

const createTrainer = async (data: any) => {
  const trainer = await User.create({
    name: data.name,
    email: data.email,
    password: data.password,
    role: 'TRAINER',
  })
  return trainer
}

const getAllTrainersS = async () => {
  const trainers = await User.find({ role: 'TRAINER' })
  return trainers
}

const deletedTrainersS = async (id: string) => {
  const trainers = await User.deleteOne({ _id: id, role: 'TRAINER' })
  return trainers
}

const getTrainersS = async (id: string) => {
  const trainers = await User.findById(id)
  if (trainers?.role === 'TRAINER') {
    return trainers
  }
  return null
}

export const trainerService = {
  createTrainer,
  getAllTrainersS,
  deletedTrainersS,
  getTrainersS,
}
