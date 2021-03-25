
import React from "react";
import NavbarItem from "../navbar-item/navbar-item.component";

export default class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			navItems: [
				{
					id: "home",
					name: "Home",
					dir: "/"
				},
				{
					id: "blog-dir",
					name: "Blog",
					dir: "/blog",
					children: [
						{
							id: "blog-march-2021",
							name: "March 2021",
							dir: "/blog/march-2021/week-1"
						}
					]
				},
				{
					id: "contact",
					name: "Contact",
					dir: "/contact"
				}
			]
		}
	}
	
	render() {
		return (
			<nav className="top-nav">
				<ul>
					{this.state.navItems.map(val => <NavbarItem {...val}/>)}
				</ul>
			</nav>
		);
	}
}
