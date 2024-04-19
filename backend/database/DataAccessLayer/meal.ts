import {Op} from 'sequelize'
import Meal from '../models/meal'
import {MealInput, MealOutput} from '../models/meal'

export const create = async (payload: MealInput): Promise<MealOutput> => {
    const meal = await Meal.create(payload)
    return meal
}

export const update = async (id: number, payload: Partial<MealInput>): Promise<MealOutput> => {
    const meal = await Meal.findByPk(id)
    if (!meal) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedMeal = await (meal as Meal).update(payload)
    return updatedMeal
}

export const getById = async (id: number): Promise<MealOutput> => {
    const meal = await Meal.findByPk(id)
    if (!meal) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return meal
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedMealCount = await Meal.destroy({
        where: {id}
    })
    return !!deletedMealCount
}

export const getAll = async (): Promise<MealOutput[]> => {
    return Meal.findAll()
}