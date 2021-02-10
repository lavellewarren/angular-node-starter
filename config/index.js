const config = require('./config.json');

module.exports = {
    getDbConnection: () => {
        return `mongodb+srv://${config.username}:${config.password}@cluster0.jvg1v.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
    }
};