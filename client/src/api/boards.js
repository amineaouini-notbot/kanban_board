import axios from 'axios';

const boards_api = {
    create: (data)=>{
        const { name, made_at } = data;

        axios.post('/board/create', {
            name,
            made_at
          })
          .then((res)=>{})
          .catch((err)=> {throw err});
    }
}

export default boards_api;