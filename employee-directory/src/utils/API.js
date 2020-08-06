import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?inc=gender,name,nat,dob,picture';

export default {
    search: function() {
        return axios.get(BASEURL)
    }
};