
import BasePage from "../base-page/base-page.page";
import "./landing-page.styles.scss";

export default class LandingPage extends BasePage {
	renderMainContent(props) {
		return (
			<div className="content-container"></div>
		);
	}
}
