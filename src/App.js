import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import MainPage from './components/MainPage';
import WatchList from './components/WatchList';
import AlreadyWatched from './components/AlreadyWatched';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MovieProvider } from './components/MovieContext';
import Login from './components/Login';
import Register from './components/Register';

const GlobalStyle = createGlobalStyle`
	body {
		background: lightsteelblue;
		margin: auto 20rem auto 20rem;
	}
`;

function App() {
	return (
		<ThemeProvider theme={GlobalStyle}>
			<MovieProvider>
				<GlobalStyle />
				<Router>
					<div className='App'>
						<Header />
						<Route exact path='/' component={MainPage} />
						<Route exact path='/watchlist' component={WatchList} />
						<Route exact path='/seen' component={AlreadyWatched} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
					</div>
				</Router>
			</MovieProvider>
		</ThemeProvider>
	);
}

export default App;
