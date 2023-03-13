import axios from 'axios';

const boards_api = {
    create: (data, cb)=>{
        const { name, made_at } = data;

        axios.post('/board/create', {
            name,
            made_at
          })
          .then((res)=>{ cb() })
          .catch((err)=> {throw err});
    }
}

export default boards_api;