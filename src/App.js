import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { ContextGlobal } from './context';
import Routes from './routes';
import theme from './theme';

function App() {
	const [favorites, setFavorites] = React.useState(
		JSON.parse(localStorage.getItem('favorites')) || []
	);
	const [searchedVideos, setSearchedVideos] = React.useState([]);

	return (
		<ContextGlobal.Provider
			value={{
				favorites,
				setFavorites,
				searchedVideos,
				setSearchedVideos,
			}}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</ContextGlobal.Provider>
	);
}

export default App;
