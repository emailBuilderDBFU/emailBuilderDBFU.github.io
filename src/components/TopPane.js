import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import {Requirements} from './Requirements';
import {ButtonInteraction} from './ButtonInteraction';
import {Category} from './Category';
import $ from 'jquery';

export class TopPane extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
		};
	}

	toggleSearchState() {
		$("#category-search").toggle(500);
		$(".searchButton").toggleClass('opened');
	}
	
	render() {
		let categories = this.props.categories.filter((category) => {
			return category.name.toLowerCase().includes(this.state.searchText.toLowerCase());
		}).map((category) => {
			return (
				<Category
					key={category.name}
					category={category}
					emailCriteria={this.props.emailCriteria}
					updateEmailCriteria={this.props.updateEmailCriteria}
				/>
			)
		});

		return (
			<div>
				<Row>
					<Col className="card-wrapper">
						<div className="card-box">
							<div className="title-and-line-wrapper">
								<h4 className="card-title">information</h4>
								<hr className="small-horizontal-line"></hr>
							</div>
							<Row><Col>
								<Requirements
									emailCriteria={this.props.emailCriteria}
									updateEmailCriteria={this.props.updateEmailCriteria}
								/>
							</Col></Row>
							<Row><Col>
								<ButtonInteraction
									generateEmail={this.props.generateEmail}
									resetEmail={this.props.resetEmail}
								/>
							</Col></Row>
						</div>
					</Col>
					<div className="vertical-line"></div>
					<Col className="card-wrapper">
						<div className="card-box">
							<div className="title-and-line-wrapper">
								<div className="title-and-search-wrapper">
									<h4 className="card-title">categories</h4>
									<div 
										className="searchButton" 
										onClick={() => this.toggleSearchState()}
									>
										<i className="fa fa-search"></i>
									</div>
									<Form.Control 
										id="category-search"
										placeholder="enter category"
										className="searchTerm"
										value={this.state.searchText}
										onChange={(ev) => this.handleChange(ev)}
									/>
								</div>
								<hr className="small-horizontal-line"></hr>
							</div>
							{categories}
						</div>
					</Col>
				</Row>
			</div>
		)
	}

	handleChange(ev) {
		console.log(ev);
		this.setState({
			searchText: ev.target.value
		});
	}
}