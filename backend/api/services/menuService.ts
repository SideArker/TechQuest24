import * as menuDal from '../../database/DataAccessLayer/menu'
import {MenuInput, MenuOutput} from '../../database/models/menu'

export const create = (payload: MenuInput): Promise<MenuOutput> => {
    return menuDal.create(payload)
}
export const update = (date:string, payload: Partial<MenuInput>): Promise<MenuOutput> => {
    return menuDal.update(date, payload)
}
export const getById = (date:string): Promise<MenuInput> => {
    return menuDal.getById(date)
}
export const deleteById = (date:string): Promise<boolean> => {
    return menuDal.deleteById(date)
}
export const getAll = (): Promise<MenuOutput[]> => {
    return menuDal.getAll()
}