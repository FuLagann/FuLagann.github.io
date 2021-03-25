
import axios from "axios";
import React from "react";

export default class XmlReader extends React.Component {
	hasStartedRead = false;
	
	readXml(monthYear, week) {
		axios.get(`/${monthYear}.blogcontent.html`).then(res => {
			// Variables
			let xml = (new DOMParser()).parseFromString(res.data, "text/xml");
			
			this.setState({ content: xml.getElementById(week) });
		}).catch(() => {
			this.setState({ content: null });
		});
	}
	render() {
		if(this.hasStartedRead === false) {
			console.log(this.props);
			this.readXml(this.props.monthYear, this.props.week);
			this.hasStartedRead = true;
		}
		if(this.state?.content == null) {
			return (<div></div>);
		}
		return (
			<div className="xml-content" dangerouslySetInnerHTML={{__html:this.state?.content.innerHTML}}/>
		);
	}
}
