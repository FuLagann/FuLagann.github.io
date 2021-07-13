
import React from "react";
import { Link } from "react-router-dom";
import "./project-tile.styles.scss";

export default class ProjectTile extends React.Component {
	render() {
		if(this.props.compact === "false") {
			return (
				<div>
					<div className="project-details">
						<header className="header">
							<h1>
								{this.props.visuals.logo &&
									<img src={`${this.props.location}/${this.props.visuals.logo.path}`}
										alt={this.props.visuals.logo.alt}
										className="project-logo"
									/>
								}
								{this.props.details.name}
							</h1>
						</header>
						<div className="body long-description" dangerouslySetInnerHTML={{__html: this.props.details.long_description}}/>
						<footer className="footer"></footer>
					</div>
					{this.props.related &&
						<div className="related related-details">
							<h2>Related Content</h2>
						</div>
					}
				</div>
			);
		}
		return (
			<div className="project">
				<header className="header">
					<h2>
						{this.props.visuals.logo &&
							<img src={`${this.props.location}/${this.props.visuals.logo.path}`}
								alt={this.props.visuals.logo.alt}
								className="project-logo"
							/>
						}
						{this.props.details.name}
					</h2>
				</header>
				<div className="body short-description" dangerouslySetInnerHTML={{__html: this.props.details.short_description}}/>
				<footer className="footer read-more">
					<Link to={`/projects/${this.props.id}`}>Read more...</Link>
				</footer>
			</div>
		);
	}
}
