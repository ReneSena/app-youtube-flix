import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/home';
import WatchPage from '../pages/watch';
import FavoritePage from '../pages/favorite';
import { SearchPage } from '../pages/search';
import Page404 from '../pages/404';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/watch" component={WatchPage} />
				<Route path="/favorites" component={FavoritePage} />
				<Route path="/search" component={SearchPage} />
				<Route path="*" component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}
