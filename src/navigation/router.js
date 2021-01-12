import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, User, Readme } from '../views';

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
                    <Route exact path='/user' component={User} />
                    <Route exact path='/readme' component={Readme} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;