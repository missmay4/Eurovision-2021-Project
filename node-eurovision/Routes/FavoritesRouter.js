const express = require('express');
const router = express.Router();
const favoritesModel = require('../Schemas/FavoritesSchema')

const { checkAuth, checkRole } = require('../middlewares/authentication')

router.post('/favorites', checkAuth, async (req, res) => {
    const body = req.body;
    body.userID = req.user._id;

    try {
        const favoritesDB = await favoritesModel.create(body);
        res.status(200).json(favoritesDB);
    } catch (error) {
        return res.status(500).json({
            msg: 'An error ocurred on favorites post',
            error
        })
    }
});

router.get('/favorites', checkAuth, async (req, res) => {
    const userID = req.user._id

    try {
        const favoritesDB = await favoritesModel.find({ userID });
        res.json(favoritesDB);
    } catch (error) {
        return res.status(400).json({
            msg: 'An error ocurred recovering the votes',
            error
        })
    }
});

module.exports = router;

