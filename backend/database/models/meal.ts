import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface MealAtributes {
  id: string;
  days: string;
  purchases: string;
}
export interface MealInput extends Required<MealAtributes> {}
export interface MealOutput extends Required<MealAtributes> {}

class meal extends Model<MealAtributes, MealInput> implements MealAtributes {
    public id!: string
    public days!: string
    public purchases!: string
  }
  
  meal.init({
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    days: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchases: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  })
  
  export default meal