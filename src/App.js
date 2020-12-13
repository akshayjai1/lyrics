import React from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Footer from './components/Footer';
import AboutUs from './components/layout/AboutUs';

import { Provider } from './Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Provider>
			<Router>
				<React.Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/lyrics/track/:id" component={Lyrics} />
						<Route exact path="/AboutUs" component={AboutUs} />
						<Route exact path="/" component={Index} />
					</Switch>
					<Footer />
				</React.Fragment>
			</Router>
		</Provider>
	);
}

export default App;
