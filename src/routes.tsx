import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

//pages
import IssuePage from '@pages/IssuePage';
import RepoPage from '@pages/RepoPage';

interface RoutesProps {
	setToastList: any,
}

const Routes = (props: RoutesProps) => {

	const { setToastList } = props;

	return (
		<Switch>
			<Route path={'/'} element={<RepoPage setToastList={setToastList}/>}/>
			<Route path={'/issue'} element={<IssuePage setToastList={setToastList}/>}/>
		</Switch>
	)
}

export default Routes;