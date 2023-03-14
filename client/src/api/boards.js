import axios from 'axios';

const boards_api = {
    create: (data, cb)=>{

        axios.post('/api/board/create', data)
          .then((res)=>{ 
            let {boardId} = res.data
            cb( boardId ) })
          .catch((err)=> {throw err});
    }
}

export default boards_api;