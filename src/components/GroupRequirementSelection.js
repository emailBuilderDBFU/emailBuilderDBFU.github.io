import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

export class GroupRequirementSelection extends React.Component {
	
	render() {
		let options = this.props.possibleValues.map((reqGroup) => (
			<Form.Check
				key={reqGroup.name}
				type="radio"
				label={`${reqGroup.name}`}
				name={this.props.requirement.name}
				id={`${reqGroup.name}`}
				onChange={(ev) => this.valueUpdated(ev)}
				checked={reqGroup === this.props.value}
			/>))
		return (
			<div className="GroupRequirementSelection">
				<Form.Group as={Row} controlId={this.props.requirement.name}>
					<Form.Label column sm="3">
						{this.props.requirement.name}
					</Form.Label>
					<Col sm="9">
						{options}
					</Col>
				</Form.Group>
			</div>
		)
	}

	valueUpdated(ev) {
		let newReqGroup = this.props.possibleValues.find((reqGroup) => reqGroup.name === ev.target.id);
		this.props.onChange(this.props.requirement, newReqGroup);
	}
}
