import React from 'react';
import {TopicSelection} from './TopicSelection';

export class LeftPane extends React.Component {
	
	render() {
		return (
			<div className="LeftPane">
				<TopicSelection />
			</div>
		)
	}
}