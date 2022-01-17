import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import parse from "html-react-parser";

export class EmailEditorNew extends Component {
	state = {
		value: RichTextEditor.createEmptyValue()
	}

	render () {
		return (
			<div>
				<RichTextEditor
					className="text-editor"
					editorClassName="rte-editor"
					value={this.state.value}
					onChange={(value) => this.onChange(value)}
				/>
			</div>
		);
	}

	onChange(value) {
    	this.setState({value});
	};


	updateRichText(text) {
		this.setState({
			value: RichTextEditor.createValueFromString(text, 'html')
		});
	}

	getText() {
		return (this.state.value.toString('html'))
	}

}