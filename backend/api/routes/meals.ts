import { Router } from 'express'
import * as mealController  from '../controllers/meals/index'
import { MealOutput, MealInput} from '../../database/models/meal'

const mealsRouter = Router()
mealsRouter.get('/:id', async (req,res) => {
    const id = Number(req.params.id)
    const result = await mealController.getById(id)
    return res.status(200).send(result)
})
mealsRouter.put('/:id', async (req,res) => {
    const id = Number(req.params.id)
    const payload:MealInput = req.body

    const result = await mealController.update(id, payload)
    return res.status(201).send(result)
})
mealsRouter.delete('/:id', async (req,res) => {
    const id = Number(req.params.id)

    const result = await mealController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})
mealsRouter.post('/', async (req,res) => {
    const payload:MealInput = req.body
    const result = await mealController.create(payload)
    return res.status(200).send(result)
})

mealsRouter.get('/', async (req, res) => {
    const results = await mealController.getAll()
    return res.status(200).send(results)
})

export default mealsRouter