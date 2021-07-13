
import BasePage from "../base-page/base-page.page";
import ProjectTiler from "../../components/project-tiler/project-tiler.component";
import "./projects-page.styles.scss";

export default class ProjectsPage extends BasePage {
	renderMainContent(props) {
		return (
			<div className="content-container">
				<ProjectTiler location="/projects"/>
			</div>
		);
	}
}

