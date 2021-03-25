
import BasePage from "../base-page/base-page.page";
import XmlReader from "../../components/xml-reader/xml-reader.component";
import "./blog-page.styles.scss";

export default class BlogPage extends BasePage {
	renderMainContent(props) {
		console.log(props);
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
