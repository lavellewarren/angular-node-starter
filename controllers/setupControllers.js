const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        const starterTodos = [
            {
                username: 'admin',
                todo: 'War is Peace',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Freedom is Slavery',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'admin',
                todo: 'Ignorance is Strength',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, (error, results) => {
            res.send(results);
        });
    });
};