const userDAO = require('../Daos/ParticipantsDao');

exports.createUser = async (user) => {
    return userDAO.createParticipant(user);
}
exports.getUsers = async () => {
    return userDAO.getUsers();
}
exports.getUser = async (userID) => {
    return userDAO.getUser(userID);
}
exports.updateUser = async (user) => {
    return userDAO.updateUser(user)
}
exports.deleteUser = async (userID) => {
    return userDAO.deleteParticipant(userID);
} 