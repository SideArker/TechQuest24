import * as service from '../../services/mealsService'
import Meal,{MealInput,MealOutput} from '../../../database/models/meal'

export const create = async(payload: MealInput): Promise<MealOutput> => {
    return await service.create(payload)
}
export const update = async (id: number, payload: MealInput): Promise<MealOutput> => {
    return await service.update(id, payload)
}
export const getById = async (id: number): Promise<MealOutput> => {
    return await service.getById(id)
}
export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(): Promise<MealOutput[]> => {
    return await service.getAll()
}