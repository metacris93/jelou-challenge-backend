const { Model, DataTypes, Sequelize } = require('sequelize');
const { POST_TABLE } = require('../models/post.model');

const COMMENT_TABLE='comments';
const CommentSchema={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    postId:{
        allowNull:false,
        field:'post_id',
        type:DataTypes.INTEGER,
        references:{
            key:'id',
            model:POST_TABLE
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    text:{
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
class Comment extends Model {
    static associate(models){
        this.belongsTo(models.Post, {as:'post'});
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:COMMENT_TABLE,
            modelName:'Comment',
            timestamps:false
        }
    }
}
module.exports = { COMMENT_TABLE, CommentSchema, Comment }
