const UsersModel = require('../Schemas/ParticiantsSchema').UsersModel

exports.createUser = async (user) => {
    return new ParticipantsModel(user).save()
}
exports.getUsers = async () => {
    return UsersModel.find()
}
exports.getUser = async (userID) => {
    return UsersModel.findOne({ _id: userID })
}
exports.updateUser = async (user) => {
    return UsersModel.updateOne({ _id: user._id }, user)
}
exports.deleteUser = async (userID) => {
    return UsersModel.deleteOne({ _id: userID })
}