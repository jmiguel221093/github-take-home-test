import api from './instance';

export const getProyectRepository = async () => {
    try{
        return await api.get('/repos/jmiguel221093/github-take-home-test/commits');
    } catch(e) {
        return e;
    }
}