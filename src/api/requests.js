import api from './instance';

export const getProyectRepository = async (page = 1, limit = 1) => {

    let error = null;
    let data = null;

    try{
        data =  await api.get(`/repos/jmiguel221093/github-take-home-test/commits?per_page=${limit}&page=${page}`);
        return [ error, data.data ];
    } catch(e) {
        error =  {
            message: e.response.data.message,
            status: e.response.status
        };
        return [ error, data ];
    }
}

export const getTheUser = async (username) => {

    let error = null;
    let data = null;

    try{
        data =  await api.get(`/users/${username}`);
        return [ error, data.data ];
    } catch(e) {
        error =  {
            message: e.response.data.message,
            status: e.response.status
        };
        return [ error, data ];
    }
}