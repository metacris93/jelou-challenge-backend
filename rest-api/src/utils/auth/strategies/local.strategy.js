const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const UsersService = require('./../../../services/user.service');
const service = new UsersService();

const LocalStrategy = new Strategy({
    usernameField: 'username',
    passwordField: 'password',
}, async (username, password, done) => {
    try {
        const user = await service.findByUsername(username);
        if (!user) {
            done(boom.unauthorized(), false);
        }
        console.log(password);
        console.log(user.password);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            done(boom.unauthorized(), false);
        }
        delete user.dataValues.password;
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStrategy;