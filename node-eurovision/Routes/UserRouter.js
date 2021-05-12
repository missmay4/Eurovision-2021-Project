const express = require('express');
const router = express.Router();
const userService = require('./../Daos/UsersDao')
const { checkAuth, checkRole } = require('../middlewares/authentication')
let Logger = require('../Utils/logger').Logger

// Hash password
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Filtrar campos de PUT
// const _ = require('underscore');

router.post('/create-user',/*[checkAuth, checkRole('Patata')],*/ async (request, response) => {
    Logger.info("Creating new User ... ")
    const body = {
        name: request.body.name,
        role: request.body.role,
        country: request.body.country
    }
    body.password = bcrypt.hashSync(request.body.password, saltRounds);
    try {
        Logger.info("userService.createUser")
        Logger.debug(JSON.stringify(body))
        const userDB = await userService.createUser(body);
        Logger.info("Response JSON")
        Logger.debug(JSON.stringify(userDB))
        response.send(JSON.stringify(userDB))
    } catch (error) {
        Logger.error(error)
        return response.status(500).json({
            msg: 'An error creating the user',
            error
        });
    }
});

router.get('/get_users', async (req, res) => {
    try {
        const response = await userService.getUsers();
        res.send(JSON.stringify(response))
    } catch (error) {
        Logger.error(error)
        return response.status(500).json({
            msg: 'An error creating the user',
            error
        });
    }
});

router.get('/get_user/:id', async (request, res) => {
    let id = request.params.id;
    try {
        const response = await userService.getUser(id)
        res.send(JSON.stringify(response))
    } catch (error) {
        Logger.error(error)
        return response.status(500).json({
            msg: 'An error creating the user',
            error
        });
    }
});

// MODIFICAR EL USUARIO?
/* router.put('/user/:id', [checkAuth, checkRole], async (req, res) => {

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

}); */

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