import { useEffect, useState } from 'react';
import { getProyectRepository } from '../api';

import { EmptyState, Icons, Page, Table, Thumbnail } from '../components';
import { formatDate, getRequestErrorMessage } from '../utils';

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

    const rows = commits?.length ? commits.map((commit) => [
        <div className="commit-author">
            <Thumbnail src={commit.author.avatar_url} />
            <span className="author-name">{commit.author.login}</span>
        </div>,
        <strong>{commit.sha.substr(0,6)}</strong>,
        commit.commit.message,
        formatDate(commit.commit.author.date)
    ]) : []

    return (
        <Page
            title="Commits"
            id="commits"
        >
            {
                (!error && rows.length > 0) &&
                <Table
                    headings={headings}
                    rows={rows}
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