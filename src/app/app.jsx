
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page/landing-page.page";

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage}/>
			</Switch>
		);
	}
}