import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { getReadme } from '../api';

import { EmptyState, Icons, Page, Spinner } from "../components";
import { getRequestErrorMessage } from "../utils";

const Readme = () => {
    
    const [readme, setReadme] = useState(null);
    const [error, setError] = useState(null);

    const getReadmeFile = async () => {
        const [error, data] = await getReadme();
        setReadme(data);
        setError(error);
    }

    useEffect(()=>{
        getReadmeFile();
    },[]);

    return (
        <Page
            id='readme'
            title="Readme file"
        >
            {
                (!error && !readme) ?
                <Spinner />:
                !error ?
                <ReactMarkdown className='markdown-container'>{atob(readme.content)}</ReactMarkdown>:
                <EmptyState
                    icon={Icons.NotFount}
                    title={`${error.status} Error`}
                    description={getRequestErrorMessage(error.status, 'readme file')}
                />
            }
        </Page>
    )
};

export default Readme;