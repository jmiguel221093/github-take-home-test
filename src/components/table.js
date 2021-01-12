const Table = ({
    rows,
    headings
}) => {
    return (
        <table className="table table-borderless">
            {
                headings && headings.length > 0 &&
                <thead>
                    <tr>
                        {
                            headings.map((heading,i)=>
                                <th scope="col" key={i}>{heading}</th>
                            )
                        }
                    </tr>
                </thead>
            }
            {
                rows && rows.length > 0 &&
                <tbody>
                    {
                        rows.map((row,i)=>
                            <tr key={i}>
                                {
                                    row.map((cell, j)=>
                                        <td key={j}>{cell}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            }
        </table>
    )
}

export default Table;