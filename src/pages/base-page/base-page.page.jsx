
import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import "./base-page.styles.scss";

export default class BasePage extends React.Component {
	renderMainContent() {
		return (<div className="content-container">Main Content</div>);
	}
	
	renderSideContent() {
		return (<div className="content-container">Side Content</div>);
	}
	
	render() {
		return (
			<div className={`page ${this.state?.pageClass || ""}`}>
				<div className="navbar-content"><Navbar/></div>
				<div className="main-content">{this.renderMainContent()}</div>
				<div className="side-content">{this.renderSideContent()}</div>
			</div>
		);
	}
}
