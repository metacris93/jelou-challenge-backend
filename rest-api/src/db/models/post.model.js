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
    },
    // tag_count: {
    //     type:DataTypes.VIRTUAL,
    //     get(){
    //         return this.tags.length;
    //     }
    // },
    // category_count: {
    //     type:DataTypes.VIRTUAL,
    //     get(){
    //         return this.categories.length;
    //     }
    // }
}
class Post extends Model {
    static associate(models){
        this.hasMany(models.Comment, {foreignKey:'postId', as:'comments'});
        this.belongsToMany(models.Tag, {through:models.PostTag, foreignKey:'postId', otherKey: 'tagId', as:'tags'});
        this.belongsToMany(models.Category, {through:models.PostCategory, foreignKey:'postId', otherKey: 'categoryId', as:'categories'});
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
