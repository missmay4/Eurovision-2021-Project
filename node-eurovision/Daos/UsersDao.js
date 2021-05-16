const UsersModel = require('../Schemas/UserSchema').UserModel

exports.createUser = async (user) => {
    return new UsersModel(user).save();
}
exports.getUsers = async () => {
    return UsersModel.find()
}
exports.getUser = async (userID) => {
    return UsersModel.findOne({ _id: userID })
}

exports.getUsername = async (name) => {
    return UsersModel.findOne({ name: name })
}
exports.updateUser = async (user) => {
    return UsersModel.updateOne({ _id: user._id }, user)
}
exports.deleteUser = async (userID) => {
    return UsersModel.deleteOne({ _id: userID })
}