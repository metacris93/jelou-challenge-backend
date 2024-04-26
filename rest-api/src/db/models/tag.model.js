const { Model, DataTypes } = require('sequelize');

const TAG_TABLE = 'tags';
const TagSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    }
}

class Tag extends Model{
    static associate(){}
    static config(sequelize){
        return{
            sequelize,
            tableName: TAG_TABLE,
            modelName: 'Tag',
            timestamps: false
        }
    }
}
module.exports = { TAG_TABLE, TagSchema, Tag }