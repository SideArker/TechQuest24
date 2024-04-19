import * as mealDal from '../../database/DataAccessLayer/meal'
import {MealInput, MealOutput} from '../../database/models/meal'

export const create = (payload: MealInput): Promise<MealOutput> => {
    return mealDal.create(payload)
}
export const update = (id: number, payload: Partial<MealInput>): Promise<MealOutput> => {
    return mealDal.update(id, payload)
}
export const getById = (id: number): Promise<MealInput> => {
    return mealDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return mealDal.deleteById(id)
}
export const getAll = (): Promise<MealOutput[]> => {
    return mealDal.getAll()
}