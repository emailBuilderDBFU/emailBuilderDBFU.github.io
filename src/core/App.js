import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootComponent} from '../components/RootComponent';
import { Schedule} from '../components/Schedule';
import { Checklist} from '../components/Checklist';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (	
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
							renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/schedule">
							<Schedule />
						</Route>
						<Route path="/">
							<RootComponent />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}

}

export default App;
