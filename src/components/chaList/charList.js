import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './charList.css';

const CharList = () => {
	return (
		<ListGroup>
			<ListGroupItem>John Snow</ListGroupItem>
			<ListGroupItem>Brandon Stark</ListGroupItem>
			<ListGroupItem>Geremy</ListGroupItem>
		</ListGroup>
	)
}

export default CharList;
