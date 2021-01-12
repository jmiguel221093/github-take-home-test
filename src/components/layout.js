import React from 'react';

const Layout = ({
    navigation,
    children
}) => {
    return <main className="layout">
        <div className="container">
            {
                navigation &&
                <div className="layout-navigation">
                    { React.cloneElement(navigation) }
                </div>
            }
            <div className="layout-body">
                {
                    children
                }
            </div>
        </div>
    </main>
}

export default Layout;