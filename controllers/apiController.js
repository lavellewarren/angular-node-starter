const bodyParser = require('body-parser');
const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    /**
     * Get Todo list for a given user
     */
    app.get('/api/todos/:username', (req, res) => {
        Todos.find({ username: req.params.username }, (error, result) => {
            if (error) throw error;
            res.send(result);
        });
    });

    /**
     * Get one Todo by id
     */
    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, (error, result) => {
            if (error) throw error;
            res.send(result);
        });
    });

    /**
     * Create or update a Todo as default admin
     */
    app.post('/api/todo', (req, res) => {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, (error) => {
                if (error) throw error;
                res.send('PATCH successful');
            })
        } else {
            const newTodo = Todos({
                username: 'admin',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save((error) => {
                if (error) throw error;
                res.send('POST successful');
            });
        }
    });

    /**
     * Delete a given Todo by id
     */
    app.delete('/api/todo', (req, res) => {
        Todos.findByIdAndDelete({ _id: req.body.id }, (error) => {
            if (error) throw error;
            res.send('DELETE successful');
        });
    });
};