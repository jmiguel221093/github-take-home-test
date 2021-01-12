import api from './instance';

export const getProyectRepository = async () => {

    let error = null;
    let data = null;

    try{
        data =  await api.get('/repos/jmiguel221093/github-take-home-test/commits');
        return [ error, data.data ];
    } catch(e) {
        error =  {
            message: e.response.data.message,
            status: e.response.status
        };
        return [ error, data ];
    }
}