import React from 'react';
import {EmailEditorNew} from './EmailEditorNew';
import {CopyButton} from './CopyButton';

export class BottomPane extends React.Component {

	constructor(props) {
		super(props);
		this._emailEditor = React.createRef();
	}
	
	render() {
		return (
			<div className="BottomPane">
				<EmailEditorNew
					ref={this._emailEditor}
				/>
				<CopyButton 
					copyEmailText={() => this.copyEmailText()}
				/>
			</div>
		)
	}

	updateRichText(text) {
		this._emailEditor.current.updateRichText(text);
	}

	copyEmailText() {
		this.props.copyEmailText(this._emailEditor.current.getText());
	}

}
