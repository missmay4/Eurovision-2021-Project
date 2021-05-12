// Constantes para las llamadas a la API
const urlApi = ''
const participant = 'participant'
const participants = "participants"
const user = 'user'

const services = {
    'GET_PARTICIPANTS': urlApi + participants,
    'GET_PARTICIPANT': urlApi + participant,
    'POST_USER': urlApi + user

}

export const constants = {
    services: services
}