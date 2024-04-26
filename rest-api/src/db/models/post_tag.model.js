const { Model, DataTypes } = require('sequelize');

const { POST_TABLE } = require('../models/post.model');
const { TAG_TABLE } = require('../models/tag.model');

const POST_TAG_TABLE = 'posts_tags';
const PostTagSchema = {
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
	tagId:{
        allowNull:false,
        field:'tag_id',
        type:DataTypes.INTEGER,
        references:{
            key:'id',
            model:TAG_TABLE
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
}

class PostTag extends Model {
	static associate(models) { }
	static config(sequelize) {
		return {
			sequelize,
			tableName: POST_TAG_TABLE,
			modelName: 'PostTag',
			timestamps: false
		}
	}
}
module.exports = { POST_TAG_TABLE, PostTagSchema, PostTag }