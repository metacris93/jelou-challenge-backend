const { readJsonFile } = require('../utils/common');
const sequelize = require('../libs/sequelize');

class PostsService {
  constructor(){
		this.posts = readJsonFile(__dirname + '/../data/posts.json')
  }

	async get() {
    return this.posts;
  }

  async create(data) {
    return data;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = PostsService;
