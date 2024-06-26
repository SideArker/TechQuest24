import {Op} from 'sequelize'
import Consumer from '../models/consumer'
import {ConsumerInput, ConsumerOutput} from '../models/consumer'

export const create = async (payload: ConsumerInput): Promise<ConsumerOutput> => {
    const consumer = await Consumer.create(payload)
    return consumer
}

export const update = async (id: number, payload: Partial<ConsumerInput>): Promise<ConsumerOutput> => {
    const consumer = await Consumer.findByPk(id)
    if (!consumer) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedConsumer = await (consumer as Consumer).update(payload)
    return updatedConsumer
}

export const getById = async (id: number): Promise<ConsumerOutput> => {
    const consumer = await Consumer.findByPk(id)
    if (!consumer) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return consumer
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedConsumerCount = await Consumer.destroy({
        where: {id}
    })
    return !!deletedConsumerCount
}

export const getAll = async (): Promise<ConsumerOutput[]> => {
    return Consumer.findAll()
}