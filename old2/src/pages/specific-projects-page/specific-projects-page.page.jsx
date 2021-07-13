
import BasePage from "../base-page/base-page.page";
import ProjectTiler from "../../components/project-tiler/project-tiler.component";
import "./specific-projects-page.styles.scss";

export default class SpecificProjectsPage extends BasePage {
	renderMainContent(props) {
		return (
			<div className="content-container">
				<ProjectTiler location="/projects" specificProject={props.match.params.projectname}/>
			</div>
		);
	}
}

