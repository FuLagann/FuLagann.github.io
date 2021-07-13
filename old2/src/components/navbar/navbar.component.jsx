
import React from "react";
import NavbarItem from "../navbar-item/navbar-item.component";
import "./navbar.styles.scss";

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			navItems: [
				{ id: "nav-home", name: "Home", dir: "/" },
				{ id: "nav-blog", name: "Blog", dir: "/blog", },
				{ id: "nav-projects", name: "Projects", dir: "/projects" }
			]
		}
	}
	
	render() {
		return (
			<nav className="top-nav">
				<ul>
					{this.state.navItems.map(val => <NavbarItem key={val.id} {...val}/>)}
				</ul>
			</nav>
		);
	}
}
