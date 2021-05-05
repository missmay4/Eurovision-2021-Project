// Constantes para las llamadas a la API
const urlApi = ''
const participant = 'participant'
const participants = "participants"

const services = {
    'GET_PARTICIPANTS': urlApi + participants,
    'GET_PARTICIPANT': urlApi + participant

}

export const constants = {
    services: services
}