import { Router } from 'express'
import consumersRouter from './consumers'
import mealsRouter from './meals'

const router = Router()

router.use('/consumers', consumersRouter)
router.use('/meals', mealsRouter)

export default router