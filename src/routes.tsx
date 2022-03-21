import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

//pages
import IssuePage from '@pages/IssuePage';
import RepoPage from '@pages/RepoPage';

const Routes = () => {

	return (
		<Switch>
			<Route path={'/'} element={<RepoPage/>}/>
			<Route path={'/issue'} element={<IssuePage/>}/>
		</Switch>
	)
}

export default Routes;