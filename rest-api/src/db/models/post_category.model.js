const { Model, DataTypes } = require('sequelize');

const { POST_TABLE } = require('../models/post.model');
const { CATEGORY_TABLE } = require('../models/category.model');

const POST_CATEGORY_TABLE = 'posts_categories';
const PostCategorySchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
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
	categoryId:{
        allowNull:false,
        field:'category_id',
        type:DataTypes.INTEGER,
        references:{
            key:'id',
            model:CATEGORY_TABLE
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    }
}

class PostCategory extends Model {
	static associate(models) { }
	static config(sequelize) {
		return {
			sequelize,
			tableName: POST_CATEGORY_TABLE,
			modelName: 'PostCategory',
			timestamps: false
		}
	}
}
module.exports = { POST_CATEGORY_TABLE, PostCategorySchema, PostCategory }