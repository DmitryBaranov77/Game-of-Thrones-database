import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './header.css';

const Header = () =>{
	return (
		<div className="app-header">
			<h3><a href='#'>Game of Thrones DB</a></h3>
			<ListGroup as='ul' horizontal>
				<ListGroupItem as='li'><a href='#'>Characters</a></ListGroupItem>
				<ListGroupItem as='li'><a href='#'>Houses</a></ListGroupItem>
				<ListGroupItem as='li'><a href='#'>Books</a></ListGroupItem>
			</ListGroup>
		</div>
	)
}

export default Header;