const express = require('express');
const router = express.Router();
// const userModel = require('../Schemas/UserSchema')
const voteModel = require('../Schemas/VoteSchema')

const { checkAuth, checkRole } = require('../middlewares/authentication')

router.post('/votes', checkAuth, async (req, res) => {
    const body = req.body;
    body.userID = req.user._id;

    try {
        const voteDB = await voteModel.create(body);
        res.status(200).json(voteDB);
    } catch (error) {
        return res.status(500).json({
            msg: 'An error ocurred on votes post',
            error
        })
    }
});

router.get('/votes', checkAuth, async (req, res) => {
    const userID = req.user._id

    try {
        const voteDB = await voteModel.find({ userID });
        res.json(voteDB);
    } catch (error) {
        return res.status(400).json({
            msg: 'An error ocurred recovering the votes',
            error
        })
    }
});

module.exports = router;