import { CoreServices } from './coreServices'
import { ApiHost } from '@/ApiHost/apihost'
import { constants } from '@/utils/constants'

const participantsServices = {
    get_participants() {
        return new Promise((resolve, reject) => {
            CoreServices.get({
                url: ApiHost + constants.services.GET_PARTICIPANTS
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })

        })
    }
}

export default participantsServices