const {Sequelize, Model, DataTypes, TIME} = require("sequelize");

const sequelize = require("../db/db");

const Curso = sequelize.define("Curso", {

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
                msg: "First name is required"
            }
        },
    },
    last_name:
    {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate:{
            notNull:{
                msg: "Last name is required"
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