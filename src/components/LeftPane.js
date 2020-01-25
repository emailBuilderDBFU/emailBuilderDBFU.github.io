import React from 'react';
import {Topics} from './Topics';

export class LeftPane extends React.Component {
	
	render() {
		return (
			<div className="LeftPane">
				<Topics />
			</div>
		)
	}
}