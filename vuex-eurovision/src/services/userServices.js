import { CoreServices } from './coreServices'
import { ApiHost } from '@/ApiHost/apihost'
import { constants } from '@/utils/constants'

const userServices = {
    log_user(user) {
        return new Promise((resolve, reject) => {
            CoreServices.post({
                url: ApiHost + constants.services.POST_USER,
                params: {
                    user: user
                }
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

export default userServices