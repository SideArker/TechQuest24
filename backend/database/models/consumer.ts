import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface ConsumerAtributes {
  id: string;
  name: string;
  surname: string;
  class: string;
  isTeacher:boolean;
}
export interface ConsumerInput extends Required<ConsumerAtributes> {}
export interface ConsumerOuput extends Required<ConsumerAtributes> {}

class consumer extends Model<ConsumerAtributes, ConsumerInput> implements ConsumerAtributes {
    public id!: string
    public name!: string
    public surname!: string
    public class!: string
    public isTeacher!: boolean

  }
  
  consumer.init({
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING
    },
    isTeacher: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: sequelizeConnection,
  })
  
  export default consumer