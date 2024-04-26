const { User, UserSchema } = require('./user.model');
const { Tag, TagSchema } = require('./tag.model');
const { Category, CategorySchema } = require('./category.model');
const { Comment, CommentSchema } = require('./comment.model');
const { Post, PostSchema } = require('./post.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
	Tag.init(TagSchema, Tag.config(sequelize));
	Category.init(CategorySchema, Category.config(sequelize));
	Comment.init(CommentSchema, Comment.config(sequelize));
	Post.init(PostSchema, Post.config(sequelize));

	User.associate(sequelize.models);
	Tag.associate(sequelize.models);
	Category.associate(sequelize.models);
	Comment.associate(sequelize.models);
	Post.associate(sequelize.models);
}
module.exports=setupModels;