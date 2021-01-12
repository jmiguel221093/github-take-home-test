import { useEffect, useState } from 'react';
import { getProyectRepository } from '../api';

import { Button, EmptyState, Icons, Page, Table, Thumbnail } from '../components';
import { formatDate, getRequestErrorMessage } from '../utils';

const Home = () => {

    const [commits, setCommits] = useState(null);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const limit = 15;
    
    const getCommits = async (page) => {
        const [error, data] = await getProyectRepository(page, limit);
        if(data){
            setCommits(data);
            setError(null);
        }
        if(error){
            setError(error);
            setCommits(null);
        }
    }

    const onPrev = () => {
        setPage(page - 1);
        setCommits(null);
    }
    const onNext = () => {
        setPage(page + 1);
        setCommits(null);
    }

    useEffect(()=>{
        !commits &&
        getCommits(page);
    });

    const headings = ['Author', 'Commit', 'Message', 'Date'];

    const rows = commits?.length ? commits.map((commit) => [
        <div className="commit-author">
            <Thumbnail src={commit.author.avatar_url} />
            <span className="author-name">{commit.author.login}</span>
        </div>,
        <strong>{commit.sha.substr(0,7)}</strong>,
        commit.commit.message,
        formatDate(commit.commit.author.date)
    ]) : []

    return (
        <Page
            title="Commits"
            id="commits"
        >
            {
                !error ?
                <>
                    <Table
                        headings={headings}
                        rows={rows}
                    />
                    <div className="text-center">
                        <div className="btn-group mt-4">
                            <Button
                                onClick={onPrev}
                                text='Prev'
                                buttonStyle='secondary'
                                outline
                                disabled={page === 1}
                            />
                            <Button
                                onClick={onNext}
                                text='Next'
                                buttonStyle='secondary'
                                outline
                                disabled={commits?.length < limit}
                            />
                        </div>
                    </div>
                </>:
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