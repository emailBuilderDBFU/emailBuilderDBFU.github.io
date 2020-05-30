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
			// isSearchOpen: false
		};
	}

	toggleSearchState() {
		console.log($('#category-search').css('opacity'));
		let opacity =  $('#category-search').css('opacity') ? 0 : 1;
		$('#category-search').animate({
			opacity: opacity
		}, 500);
		// this.setState({
		// 	isSearchOpen: !this.state.isSearchOpen
		// });
	}
	
	render() {
		let categories = this.props.categories.filter((category) => {
			return category.name.toLowerCase().includes(this.state.searchText.toLowerCase());
		}).map((category) => {
			return (
				<Category
					category={category}
					emailCriteria={this.props.emailCriteria}
					updateEmailCriteria={this.props.updateEmailCriteria}
				/>
			)
		})

		// let search = this.state.isSearchOpen ? ('inline-block') : ('none')
		// let edges = this.state.isSearchOpen ? ('5px 0 0 5px') : ('5px 5px 5px 5px')

		return (
			<div>
				<Row>
					<Col className="card-wrapper">
						<div className="card">
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
						<div className="card">
							<div className="title-and-line-wrapper">
								<div className="title-and-search-wrapper">
									<h4 className="card-title">categories</h4>
									<div 
										className="searchButton" 
										onClick={() => this.toggleSearchState()}
										// style={{"borderRadius":edges}} 
										>
											<i className="fa fa-search"></i>
									</div>
									<Form.Control 
										id="category-search"
										placeholder="enter category"
										className="searchTerm"
										// style={{display:search}}
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