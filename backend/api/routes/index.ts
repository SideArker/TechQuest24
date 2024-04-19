import { Router } from 'express'
import consumersRouter from './consumers'

const router = Router()

router.use('/consumers', consumersRouter)

export default router