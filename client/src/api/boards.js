import axios from 'axios';

const boards_api = {
    create: (data)=>{

        return axios.post('/api/board/create', data)
    }
}

export default boards_api;