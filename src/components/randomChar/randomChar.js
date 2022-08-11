import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './randomChar.css'

const RandomChar = () => {
	return (
		<div className="rounded random-block">
			<h4>Random Character: John</h4>
			<ListGroup as="ul" variant="flush">
				<ListGroupItem as="li">
					<span className="term">Gender</span>
					<span>male</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Born</span>
					<span>11.03.1039</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Died</span>
					<span>13.09.1089</span>
				</ListGroupItem>
				<ListGroupItem as="li">
					<span className="term">Culture</span>
					<span>Anarchy</span>
				</ListGroupItem>
				
			</ListGroup>
		</div>
	)
}

export default RandomChar;
