const ParticipantsModel = require('../Schemas/ParticiantsSchema').ParticiantsModel

exports.createParticipant = async (participant) => {
    return new ParticipantsModel(participant).save()
}
exports.getParticipants = async () => {
    return ParticipantsModel.find()
}
exports.getParticipant = async (participantID) => {
    return ParticipantsModel.findOne({ _id: participantID })
}
exports.updateParticipant = async (participant) => {
    return ParticipantsModel.updateOne({ _id: participant._id }, participant)
}
exports.deleteParticipant = async (participantID) => {
    return ParticipantsModel.deleteOne({ _id: participantID })
}