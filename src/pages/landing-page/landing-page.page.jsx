
import BasePage from "../base-page/base-page.page";
import "./landing-page.styles.scss";

export default class LandingPage extends BasePage {
	renderSideContent() {
		return (
			<div className="content-container">
				<div className="quick-content">
					<div className="title">Paul Gonzalez-Becerra</div>
					<div className="subtitle">pgonzbecer@gmail.com</div>
				</div>
			</div>
		);
	}
}
