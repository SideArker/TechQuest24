import * as service from '../../services/menuService'
import Menu,{MenuInput,MenuOutput} from '../../../database/models/menu'

export const create = async(payload: MenuInput): Promise<MenuOutput> => {
    return await service.create(payload)
}
export const update = async (date:string, payload: MenuInput): Promise<MenuOutput> => {
    return await service.update(date, payload)
}
export const getById = async (date:string): Promise<MenuOutput> => {
    return await service.getById(date)
}
export const deleteById = async(date:string): Promise<Boolean> => {
    const isDeleted = await service.deleteById(date)
    return isDeleted
}
export const getAll = async(): Promise<MenuOutput[]> => {
    return await service.getAll()
}