import { Router } from 'express'
import * as consumerController  from '../controllers/consumers/index'
import { ConsumerOutput, ConsumerInput} from '../../database/models/consumer'

const consumersRouter = Router()
consumersRouter.get('/:id', async (req,res) => {
    const id = Number(req.params.id)
    const result = await consumerController.getById(id)
    return res.status(200).send(result)
})
consumersRouter.put('/:id', async (req,res) => {
    const id = Number(req.params.id)
    const payload:ConsumerInput = req.body

    const result = await consumerController.update(id, payload)
    return res.status(201).send(result)
})
consumersRouter.delete('/:id', async (req,res) => {
    const id = Number(req.params.id)

    const result = await consumerController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})
consumersRouter.post('/', async (req,res) => {
    const payload:ConsumerInput = req.body
    const result = await consumerController.create(payload)
    return res.status(200).send(result)
})

consumersRouter.get('/', async (req, res) => {
    const results = await consumerController.getAll()
    return res.status(200).send(results)
})

export default consumersRouter