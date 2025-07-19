import express, { Request, Response } from 'express'
import userRouter from './app/module/user/user.router'
import authRoute from './app/module/auth/auth.route'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { NotFound } from './app/middlewares/notFound'
import trainerRouter from './app/module/trainer/trainer.route'

const app = express()

// middleware
app.use(express.json())



// router 
app.use('/api/user', userRouter)
app.use('/api/auth', authRoute)
app.use('/api/trainer', trainerRouter)


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
