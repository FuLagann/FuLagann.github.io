
import axios from "axios";
import React from "react";

export default class XmlReader extends React.Component {
	pageLocation = "";
	
	readXml(monthYear, week) {
		axios.get(`/${monthYear}.blogcontent.html`).then(res => {
			// Variables
			let xml = (new DOMParser()).parseFromString(res.data, "text/xml");
			
			this.setState({ content: xml.getElementById(week) });
		}).catch(() => {
			this.setState({ content: null });
		});
	}
	
	hasPageChanged(state) {
		if(this.state == null) {
			return true;
		}
		if(this.pageLocation === "") {
			return true;
		}
		return (state.location.pathname !== this.pageLocation);
	}
	
	render() {
		if(this.hasPageChanged(this.state)) {
			if(this.state != null && this.state.location != null) {
				this.pageLocation = this.state.location.pathname;
			}
			this.readXml(this.props.monthYear, this.props.week);
		}
		if(this.state?.content == null) {
			return (<div></div>);
		}
		return (
			<div className="xml-content" dangerouslySetInnerHTML={{__html:this.state?.content.innerHTML}}/>
		);
	}
}
