
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page/landing-page.page";
import BlogPage from "../pages/blog-page/blog-page.page";

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage}/>
				<Route exact path="/blog/:monthyear/:week" component={BlogPage}/>
			</Switch>
		);
	}
}
