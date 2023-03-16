import axios from 'axios';
import sp from 'synchronized-promise'
const boards_api = {
    create: (data)=>{

        return sp(axios.post)('/api/board/create', data)
    }
}

export default boards_api;