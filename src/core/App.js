import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootComponent } from '../components/RootComponent';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
							renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
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
