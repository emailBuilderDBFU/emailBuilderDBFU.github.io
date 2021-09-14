import React from 'react';
import './RootComponent.css';
import {Row, Col, Container, Table, Card} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';


export class Schedule extends React.Component {
	render() {
		return(
			<div>
				<div className="Header">
					<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
					<h2 className="SchedTitle">schedule</h2>
				</div>
				<div class="Sched">
					<Card>
						<Table striped bordered class="table table-bordered">
							<thead>
								<tr>
									<th></th>
									<th>Sunday</th>
									<th>Monday</th>
									<th>Tuesday</th>
									<th>Wednesday</th>
									<th>Thursday</th>
									<th>Friday</th>
									<th>Saturday</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Tier 1 Volunteer</td>
									<td>Sohpia (Training)</td>
									<td></td>
									<td></td>
									<td>Amanda D</td>
									<td></td>
									<td></td>
									<td>Mike</td>
								</tr>

								<tr>
									<td>Tier 2 Volunteer</td>
									<td>
										<Row className ="Sched-Cell">Kristin</Row> 
									</td>
									<td>
										<Row className ="Sched-Cell">Laura M</Row> 
										<Row className ="Sched-Cell">Stephanie (Training)</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Laura M</Row> 
										<Row className ="Sched-Cell">Shannon</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Amanda S</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Lisa</Row> 
									</td>
									<td>
										<Row className ="Sched-Cell">Megan</Row> 
									</td>
									<td>
										<Row className ="Sched-Cell">Lisa</Row> 
										<Row className ="Sched-Cell">Shannon</Row>
									</td>
								</tr>

								<tr>
									<td>Tier 3 Volunteer</td>
									<td>
										<Row className ="Sched-Cell">Jess</Row> 
										<Row className ="Sched-Cell">Megan</Row>
									</td>
									<td>Jess</td>
									<td>
										<Row className ="Sched-Cell">Kathleen</Row> 
										<Row className ="Sched-Cell">Amanda S</Row>
									</td>
									<td>Kathleen</td>
									<td><Row className ="Sched-Cell">Kathleen</Row> 
										<Row className ="Sched-Cell">Angela</Row></td>
									<td>Kathleen</td>
									<td>Jess</td>
								</tr>

								<tr>
									<td>Staff</td>
									<td>
										<Row className ="Sched-Cell">Amy</Row> 
										<Row className ="Sched-Cell">Laura P</Row>
										<Row className ="Sched-Cell">Kaitlan</Row> 
									</td>
									<td>
										<Row className ="Sched-Cell">Amy</Row> 
										<Row className ="Sched-Cell">Laura P</Row>
										<Row className ="Sched-Cell">Kaitlan</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Amy</Row> 
										<Row className ="Sched-Cell">Laura P</Row>
										<Row className ="Sched-Cell">Zan</Row>
										<Row className ="Sched-Cell">Kaitlan</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Laura P</Row>
										<Row className ="Sched-Cell">Zan</Row>
										<Row className ="Sched-Cell">Kaitlan</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Zan</Row>
										<Row className ="Sched-Cell">Kaitlan</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Amy</Row> 
										<Row className ="Sched-Cell">Zan</Row>
									</td>
									<td>
										<Row className ="Sched-Cell">Amy</Row> 
										<Row className ="Sched-Cell">Laura P</Row>
										<Row className ="Sched-Cell">Zan</Row>
									</td>
								</tr>
							</tbody>
						</Table>
					</Card>
				</div>
			</div>
		)
	}
}