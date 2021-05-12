const express = require('express');
const router = express.Router();
const userModel = require('../Schemas/UserSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

router.post('/', async (req, res) => {
    let body = req.body;
    try {
        // Search country in database
        const userDB = await userModel.findOne({ country: body.country });

        // Look if user exists in database
        if (!userDB) {
            return res.status(400).json({
                msg: 'Invalid user',
            });
        }

        // Check for correct password 
        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({
                msg: 'Invalid password',
            });
        }

        // Generate token
        let token = jwt.sign({
            data: userDB
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30 }) // Expira en 30 días

        // Valid 
        return res.json({
            userDB,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'An error ocurrend trying to log-in',
            error
        });
    }

});


router.get('/', async (req, res) => {
    res.json({ msg: 'Login works!' })
})

module.exports = router;