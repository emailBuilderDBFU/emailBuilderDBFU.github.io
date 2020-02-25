import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

export class AuditedRequirementSelection extends React.Component {
	
	render() {
		return (
			<div className="AuditedRequirementSelection">
				<Form.Group as={Row} controlId={this.props.requirement.name}>
					<Form.Label column sm="2">
						{this.props.requirement.name}
					</Form.Label>
					<Col sm="9">
						<Form.Control 
							type="text"
							value={this.props.value}
							onChange={(ev) => this.valueUpdated(ev)} 
						/>
					</Col>
				</Form.Group>
			</div>
		)
	}

	valueUpdated(ev) {
		this.props.onChange(this.props.requirement, ev.target.value);
	}
}