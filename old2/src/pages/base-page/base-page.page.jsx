
import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import "./base-page.styles.scss";

export default class BasePage extends React.Component {
	renderMainContent(props) {
		return (<div className="content-container">Main Content</div>);
	}
	
	renderSideContent(props) {
		return (<div className="content-container">Side Content</div>);
	}
	
	render() {
		return (
			<div className={`page ${this.state?.pageClass || ""}`}>
				<div className="main-content">
					{this.renderMainContent(this.props)}
				</div>
				<div className="side-content">
					<div className="navbar-content"><Navbar/></div>
					{this.renderSideContent(this.props)}
				</div>
			</div>
		);
	}
}
