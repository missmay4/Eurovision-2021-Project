const express = require('express');
const router = express.Router();
const userModel = require('../Schemas/UserSchema')
const { checkAuth, checkRole } = require('../middlewares/authentication')

// Hash password
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
const _ = require('underscore');

router.post('/user', [checkAuth, checkRole], async (req, res) => {
    const body = {
        name: req.body.name,
        role: req.body.role
    }
    body.password = bcrypt.hashSync(req.body.password, saltRounds);

    try {
        const userDB = await userModel.create(body);
        res.send(JSON.stringify(userDB))

        // return res.json(userDB);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error creating the user',
            error
        });
    }
});

router.get('/', function (req, res, next) {
    res.send('Respond with a resource');
});

router.put('/user/:id', [checkAuth, checkRole], async (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'role', 'password', 'country']);
    if (body.password) {
        body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }

    try {
        // {new:true} nos devuelve el usuario actualizado
        const dbUser = await userModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });

        return res.json(dbUser);

    } catch (error) {
        return res.status(400).json({
            msg: 'An error happend with PUT user',
            error
        })
    }

});

router.delete('/user/:id', [checkAuth, checkRole], async (req, res) => {

    let id = req.params.id;

    try {
        const deleteUser = await userModel.findByIdAndRemove(id);
        if (!deleteUser) {
            return res.status(400).json({
                msg: 'User not found'
            })
        }
        return res.json(deleteUser);
    } catch (error) {
        return res.status(400).json({
            msg: 'An error ocurred when delete a user',
            error
        })
    }
});

module.exports = router;

/* const express = require('express');
const router = express.Router();

router.post('/user', async (req, res) => {
    try {
        // TODO: create user
    } catch (error) {
        console.log(error)
        res.statusCode = 500
        res.send({
            errorMessage: JSON.stringify(error),
            statusCode: 500
        });

    }
})
router.get('/user/:id', async (req, res) => {
    try {
        // TODO: create user
    } catch (error) {
        console.log(error)
        res.statusCode = 500
        res.send({
            errorMessage: error,
            statusCode: 500
        });
    }
})

router.get('/users', async (req, res) => {
    try {
        const response = await UserService.getUsers();
        res.send(JSON.stringify(response))

    } catch (error) {
        console.log(error)
        res.statusCode = 500
        res.send({
            errorMessage: error,
            statusCode: 500
        });

    }
})


exports.router = router; */