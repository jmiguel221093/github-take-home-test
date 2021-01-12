import { useEffect } from 'react';
import { getProyectRepository } from '../api';

const Home = () => {
    
    useEffect(()=>{
        (async () => {
            const data = await getProyectRepository();
            console.log("DATA", data);
        })();
    },[])

    return (
        <h1>Home</h1>
    )
}

export default Home;