const router = require('express').Router();
const { json } = require('express');
const ParticipantService = require('../Services/ParticipantsService')

router.post('/participant', async (require, response) => {
    try {
        const participant = require.body;
        delete participant._id;
        const res = await ParticipantService.createParticipant(participant);
        response.send(JSON.stringify(res))
    } catch (error) {
        console.log(error)
        response.statusCode = 500
        response.send({
            errorMessage: JSON.stringify(error),
            statusCode: 500
        });

    }
})

// TODO: Post para introducir todos los datos de países

router.get('/participant/:id', async (require, response) => {
    try {
        const id = require.params.id;

        const response = await ParticipantService.getParticipant(id);
        response.send(JSON.stringify(response))

    } catch (error) {
        console.log(error)
        response.statusCode = 500
        response.send({
            errorMessage: error,
            statusCode: 500
        });

    }
})

router.get('/participants', async (require, response) => {
    try {
        const res = await ParticipantService.getParticipants();
        response.send(JSON.stringify(res))

    } catch (error) {
        console.log(error)
        response.statusCode = 500
        response.send({
            errorMessage: error,
            statusCode: 500
        });

    }
})


exports.router = router;