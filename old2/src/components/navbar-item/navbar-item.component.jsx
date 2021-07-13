
import React from "react";
import { Link } from "react-router-dom";
import "./navbar-item.styles.scss";

export default class NavbarItem extends React.Component {
	render() {
		return (
			<li className="navbar-item">
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
