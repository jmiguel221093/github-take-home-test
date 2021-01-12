import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../views';

import { Layout, Tabs } from '../components';

const Router = () => {

    const navigationItems = [ 
		{
			content: 'Commit history',
			url: '/'
		},
		{
			content: 'Owner info',
			url: '/user'
		},
		{
			content: 'Readme',
			url: '/readme'
		}
	]

	const layoutNavigationMarkup = (
		<Tabs 
			items={navigationItems}
		/>
	)

    return (
        <BrowserRouter>
            <Layout
                navigation={layoutNavigationMarkup}
            >
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;