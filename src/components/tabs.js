import { NavLink } from 'react-router-dom';

const Tabs = ({
    items
}) => {
    return (
        <div className="tabs py-4">
            {
                items &&
                <ul>
                    {
                        items.map((item, i) => (
                            <li key={i} className="me-4">
                                <NavLink
                                    exact
                                    to={item.url} 
                                    className='text-black-50' 
                                    activeClassName='active'>
                                    {item.content}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Tabs;