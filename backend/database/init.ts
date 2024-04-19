import Consumer from './models/consumer'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Consumer.sync({ alter: true })
}
export default dbInit 