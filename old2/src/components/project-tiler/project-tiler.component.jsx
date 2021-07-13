
import axios from "axios";
import React from "react";
import ProjectTile from "../project-tile/project-tile.component";
import MarkdownIt from "markdown-it";
import Prism from "markdown-it-prism";
import "./project-tiler.styles.scss";

import "prismjs/components/prism-json";
import "prismjs/components/prism-csharp";

export default class ProjectTiler extends React.Component {
	location = "";
	specificProject = "";
	
	constructor(props) {
		super(props);
		this.state = { projects: [] };
		this.location = props.location || "/projects";
		this.specificProject = props.specificProject || "";
		this.md = new MarkdownIt({ html: true});
		this.md = this.md.use(Prism);
		axios.get(this.location).then(this.getProjectDetails);
	}
	
	getProjectDetails = async (val) => {
		// Variables
		let data = val.data;
		let projects = [];
		
		for(let i = 0; i < data.length; i++) {
			if(this.specificProject && this.specificProject !== data[i]) {
				continue;
			}
			// Variables
			let projectLocation = `${this.location}/${data[i]}`;
			let contents = (await axios.get(`${projectLocation}/project.json`)).data;
			
			if(!contents.metadata) { contents.metadata = { upvotes: 0 }; }
			if(!contents.metadata.upvotes) { contents.metadata.upvotes = 0; }
			
			contents.details.short_description = await this.getRenderedContentFromFile(
				projectLocation,
				contents.details.short_description
			);
			contents.details.long_description = await this.getRenderedContentFromFile(
				projectLocation,
				contents.details.long_description
			);
			contents.id = data[i];
			contents.location = projectLocation;
			projects.push(contents);
		}
		
		projects.sort((a, b) => b.metadata.upvotes - a.metadata.upvotes);
		this.setState({ projects: projects });
	};
	
	getRenderedContentFromFile = async (location, filename) => {
		// Variables
		const fileRegex = /(.*\/)*.*\.(md|html)/;
		const match = filename.match(fileRegex);
		
		if(match) {
			// Variables
			const fullLocation = `${location}/${filename}`;
			let content = (await axios.get(fullLocation)).data;
			
			return (match[2] === "md" ?
				this.md.render(content) :
				content
			);
		}
		return filename;
	};
	
	render = () => {
		if(this.specificProject) {
			return (
				<div className="projects">
					{this.state.projects.map(proj => {
						return (
							<ProjectTile key={proj.id}
								compact="false"
								location={proj.location}
								{...proj}
							/>
						);
					})}
				</div>
			)
		}
		return (
			<div className="projects">
				{this.state.projects.map(proj => {
					return (
						<ProjectTile key={proj.id}
							compact="true"
							expandProject={this.expandProject}
							location={proj.location}
							{...proj}
						/>
					);
				})}
			</div>
		);
	}
}
