const participantDAO = require('../Daos/ParticipantsDao');

exports.createParticipant = async (participant) => {
    return participantDAO.createParticipant(participant);
}
exports.getParticipants = async () => {
    return participantDAO.getParticipants();
}
exports.getParticipant = async (participantID) => {
    return participantDAO.getParticipant(participantID);
}
exports.updateParticipant = async (participant) => {
    return participantDAO.updateParticipant(participant)
}
exports.deleteParticipant = async (participantID) => {
    return participantDAO.deleteParticipant(participantID);
}