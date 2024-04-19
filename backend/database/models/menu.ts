import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface MenuAtributes {
  date: string;
  firstMeal: string;
  secondMeal: string;
  drink: string;
  alergeny: string;
}
export interface MenuInput extends Required<MenuAtributes> {}
export interface MenuOutput extends Required<MenuAtributes> {}

class menu extends Model<MenuAtributes, MenuInput> implements MenuAtributes {
    public date!: string;
    public firstMeal!: string;
    public secondMeal!: string;
    public drink!: string;
    public alergeny!: string;
  }
  
  menu.init({
    date: {
      type: DataTypes.DATE,
      autoIncrement: true,
      primaryKey: true,
    },
    firstMeal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondMeal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    alergeny: {
        type: DataTypes.STRING,
      },
  }, 
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  })
  
  export default menu