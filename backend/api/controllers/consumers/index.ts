import * as service from '../../services/consumerService'
import Consumer,{ConsumerInput,ConsumerOutput} from '../../../database/models/consumer'

export const create = async(payload: ConsumerInput): Promise<ConsumerOutput> => {
    return await service.create(payload)
}
export const update = async (id: number, payload: ConsumerInput): Promise<ConsumerOutput> => {
    return await service.update(id, payload)
}
export const getById = async (id: number): Promise<ConsumerOutput> => {
    return await service.getById(id)
}
export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(): Promise<ConsumerOutput[]> => {
    return await service.getAll()
}