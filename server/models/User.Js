const {Model,DataType} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections')


class User extends Model{
    checkpassword(LoginPw){
        return bcrypt.compare(LoginPw,this.password)
    }
}

User.init(
    {
        first_name:{
            type:DataType.STRING,
            allowNull:false,
        },
        last_name:{
            type:DataType.STRING,
            allowNull:false,
        },
        email:{
            type:DataType.STRING,
            allowNull:false,
            unique:true,
            validation:{
                isEmail:true
            },
            city:{
                type:DataType.STRING,
                allowNull:false
            },
            password:{
                type:DataType.STRING,
                allowNull:false,
                validation:{
                    min:[8]
                }
            }
        }
    },
    {
        hooks: {
        beforeCreate:async(newUserData)=>{
            newUserData.password = await bcrypt.hash(newUserData.password,10)
            return newUserData
        }
        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'user'
    }
);


module.exports = User;