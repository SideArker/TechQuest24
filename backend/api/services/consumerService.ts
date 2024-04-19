import * as consumerDal from '../../database/DataAccessLayer/consumer'
import {ConsumerInput, ConsumerOutput} from '../../database/models/consumer'

export const create = (payload: ConsumerInput): Promise<ConsumerOutput> => {
    return consumerDal.create(payload)
}
export const update = (id: number, payload: Partial<ConsumerInput>): Promise<ConsumerOutput> => {
    return consumerDal.update(id, payload)
}
export const getById = (id: number): Promise<ConsumerInput> => {
    return consumerDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return consumerDal.deleteById(id)
}
export const getAll = (): Promise<ConsumerOutput[]> => {
    return consumerDal.getAll()
}