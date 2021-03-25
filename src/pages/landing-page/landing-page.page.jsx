
import BasePage from "../base-page/base-page.page";
import XmlReader from "../../components/xml-reader/xml-reader.component";
import "./landing-page.styles.scss";

export default class LandingPage extends BasePage {
	renderMainContent(props) {
		console.log(props.match.params);
		return (
			<div className="content-container">
				<XmlReader
					monthYear={props.match.params.monthyear}
					week={props.match.params.week}
				/>
			</div>
		);
	}
}
