import express, { Request, Response } from 'express'
import userRouter from './app/module/user/user.router'
import authRoute from './app/module/auth/auth.route'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { NotFound } from './app/middlewares/notFound'
import trainerRouter from './app/module/trainer/trainer.route'
import classSchedulrouter from './app/module/classSchedule/classSchedule.route'
import bookingrouter from './app/module/booking/booking.route'

const app = express()

// middleware
app.use(express.json())

// router
app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)
app.use('/api/trainer', trainerRouter)
app.use('/api/classSchedul', classSchedulrouter)
app.use('/api/booking', bookingrouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

//golbal error handelar
app.use(globalErrorHandler)
//route not found
app.use(NotFound)

export default app
