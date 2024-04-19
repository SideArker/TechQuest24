import Consumer from './models/consumer'
import meal from './models/meal'
import menu from './models/menu'

const dbInit = () => {
    Consumer.sync({ alter: true })
    meal.sync({alter: true})
    menu.sync({alter: true})
}
export default dbInit 