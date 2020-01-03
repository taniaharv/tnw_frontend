import axios from 'axios';

const KEY = '9fc5801c84197306956b21346122b774';
const ID = 'cb77ee15';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?',
    params: {
        'q': 'ingredient',
        'excluded': 'excluded',
        'Health': 'sortBy',
        'app_id': ID,
        'app_key': KEY,
    },
});     