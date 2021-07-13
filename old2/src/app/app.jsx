
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page/landing-page.page";
import BlogPage from "../pages/blog-page/blog-page.page";
import ProjectsPage from "../pages/projects-page/projects-page.page";
import SpecificProjectsPage from "../pages/specific-projects-page/specific-projects-page.page";

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={LandingPage}/>
				<Route exact path="/blog" component={BlogPage}/>
				<Route exact path="/blog/:monthyear/:week" component={BlogPage}/>
				<Route exact path="/projects" component={ProjectsPage}/>
				<Route exact path="/projects/:projectname" component={SpecificProjectsPage}/>
			</Switch>
		);
	}
}
