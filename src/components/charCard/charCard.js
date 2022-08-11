import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './charCard.css'

const CharCard = () => {
	return (
		<div className="rounded card-block">
			<h4>John Snow</h4>
			<ListGroup as="ul" variant="flush">
				<ListGroupItem as="li">
					<span className="term">Gender</span>
					<span>male</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Born</span>
					<span>1783</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Died</span>
					<span>1820</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Culture</span>
					<span>First</span>
				</ListGroupItem>
				
			</ListGroup>
		</div>
	)
}

export default CharCard;
