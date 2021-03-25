
import React from "react";
import { Link } from "react-router-dom";

export default class NavbarItem extends React.Component {
	render() {
		console.log(this.props)
		return (
			<li key={this.props.id}>
				<Link to={this.props.dir} className="nav-link-desc">{this.props.name}</Link>
				{
					this.props.children !== undefined ?
						<ul className="nested-nav">
							{this.props.children.map(val => <NavbarItem {...val}/>)}
						</ul> :
						""
				}
			</li>
		);
	}
}
