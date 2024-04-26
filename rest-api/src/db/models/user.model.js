const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const USER_TABLE='users';
const UserSchema={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    username:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'create_at',
        defaultValue:Sequelize.NOW
    }
}
class User extends Model {
    static associate(){}
    static config(sequelize){
        return{
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false,
            hooks: {
              beforeCreate: async (user, options) => {
                const password = await bcrypt.hash(user.password, 10);
                user.password = password;
              }
            },
			//defaultScope: {
			//	attributes: { exclude: ['password'] },
			//},
			//scopes: {
			//	withPassword:{ attributes: {}, }
			//},
        }
    }
}
module.exports = { USER_TABLE, UserSchema, User }
