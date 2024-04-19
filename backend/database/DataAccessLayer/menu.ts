import {Op} from 'sequelize'
import Menu from '../models/menu'
import {MenuInput, MenuOutput} from '../models/menu'

export const create = async (payload: MenuInput): Promise<MenuOutput> => {
    const menu = await Menu.create(payload)
    return menu
}

export const update = async (date: string, payload: Partial<MenuInput>): Promise<MenuOutput> => {
    const menu = await Menu.findByPk(date)
    if (!menu) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedMenu = await (menu as Menu).update(payload)
    return updatedMenu
}

export const getById = async (date:string): Promise<MenuOutput> => {
    const menu = await Menu.findByPk(date)
    if (!menu) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return menu
}

export const deleteById = async (date:string): Promise<boolean> => {
    const deletedMenuCount = await Menu.destroy({
        where: {date}
    })
    return !!deletedMenuCount
}

export const getAll = async (): Promise<MenuOutput[]> => {
    return Menu.findAll()
}