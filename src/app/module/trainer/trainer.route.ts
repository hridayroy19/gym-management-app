import { Router } from 'express'
import auth from '../../middlewares/auth'
import { trainerController } from './trainer.controller'


const trainerRouter = Router()

trainerRouter.post('/create-tainer', auth('ADMIN'), trainerController.createTrainerC)
trainerRouter.get('/', auth('ADMIN'), trainerController.getAllTrainers)
trainerRouter.delete('/:trainerId', auth('ADMIN'), trainerController.deletTrainrs)
trainerRouter.get('/:id', trainerController.getTrainrs)

export default trainerRouter
