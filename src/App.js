import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import MainPage from './components/MainPage';
import WatchList from './components/WatchList';
import AlreadyWatched from './components/AlreadyWatched';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Route exact path='/' component={MainPage} />
				<Route exact path='/watchlist' component={WatchList} />
				<Route exact path='/seen' component={AlreadyWatched} />
			</div>
		</Router>
	);
}

export default App;
