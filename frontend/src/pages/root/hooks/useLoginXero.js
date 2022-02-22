import {setSessionCookie} from "../../../utils/cookies/cookies"
import { getXeroUrl } from "../../../utils/RequestApi/calls"

const useLoginXero = () => {
    const onClickXeroButton = async () => {
        const data = await getXeroUrl()
        if (data){
            setSessionCookie(data.id)
            window.open(data.consertUrl, "_self")
        }
    }

    return {
        onClickXeroButton
    }
}

export default useLoginXero
