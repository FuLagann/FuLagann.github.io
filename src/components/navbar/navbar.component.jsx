
import axios from "axios";
import React from "react";

export default class Navbar extends React.Component {
	componentDidMount() {
		axios.get("/test.xml", { "Content-Type": "application/xml; charset=utf-8" })
			.then(res => {
				// Variables
				let xml = (new DOMParser()).parseFromString(res.data, "text/xml");
				
				let div = document.createElement("div");
				div.innerHTML = xml.getElementById("test-123").innerHTML;
				this.setState({ content: div });
			});
	}
	
	render() {
		return (
			<nav className="top-nav">
				<div dangerouslySetInnerHTML={{__html: this.state?.content.innerHTML}}/>
			</nav>
		);
	}
}
