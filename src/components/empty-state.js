import { createElement } from 'react';

const EmptyState = ({
    icon,
    title,
    description
}) => {
    return <div className="empty-state">
        {
            icon &&
            <div className="empty-state-icon mb-4">
                { createElement(icon) }
            </div>
        }
        {
            title &&
            <h1 className="mb-3">{title}</h1>
        }
        {
            description &&
            <p>{description}</p>
        }
    </div>
}

export default EmptyState;