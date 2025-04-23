const {Sequelize, Model, DataTypes, TIME} = require("sequelize");

const sequelize = require("../db/db");

const Estudiante = sequelize.define("Estudiante", {

    id:{
    type: DataTypes.UUID,
    deffaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    },
    first_name:
    {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate:{
            notNull:{
                msg: "Curs name is required"
            }
        },
    },
    last_name:
    {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate:{
            notNull:{
                msg: "Teacher name is required"
            }
        },
    },
    email:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
            notNull:{
                msg: "Email is required"
            }
        },
    },

    
},
{
TIMESTAMP: true,
}
);
module.exports = Curso;