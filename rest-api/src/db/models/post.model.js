const { Model, DataTypes, Sequelize } = require('sequelize');

const POST_TABLE='posts';
const PostSchema={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    title:{
        allowNull:false,
        type:DataTypes.STRING
    },
    content:{
        allowNull:false,
        type:DataTypes.TEXT
    },
    createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'create_at',
        defaultValue:Sequelize.NOW
    }
}
class Post extends Model {
    static associate(models){
        this.hasMany(models.Comment, {foreignKey:'postId', as:'comments'});
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:POST_TABLE,
            modelName:'Post',
            timestamps:false
        }
    }
}
module.exports = { POST_TABLE, PostSchema, Post }
