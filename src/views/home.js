import { useEffect, useState } from 'react';
import { getProyectRepository } from '../api';

import { EmptyState, Icons, Page, Table } from '../components';
import { getRequestErrorMessage } from '../utils';

const Home = () => {

    const [commits, setCommits] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        (async () => {
            const [error, data] = await getProyectRepository();
            if(data){
                console.log("DATA", data);
                setCommits(data);
                setError(null);
            }
            if(error){
                setError(error);
                setCommits(null);
            }
        })();
    },[]);

    const headings = ['Author', 'Commit', 'Message', 'Date'];

    return (
        <Page
            title="Commits"
        >
            {
                (!error && commits && commits.length > 0) &&
                <Table
                    headings={headings}
                />
            }
            {
                error &&
                <EmptyState
                    icon={Icons.NotFount}
                    title={`${error.status} Error`}
                    description={getRequestErrorMessage(error.status, 'repository')}
                />
            }
        </Page>
    )
}

export default Home;