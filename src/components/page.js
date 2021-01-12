const Page = ({
    children,
    title
}) => {
    return (
        <div className="page mt-4">
            {
                title &&
                <div className="page-header mb-5">
                    <h1>{ title }</h1>
                </div>
            }
            <div className="page-body">
                { children }
            </div>
        </div>
    );
}

export default Page;