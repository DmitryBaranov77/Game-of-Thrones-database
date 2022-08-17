import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './header.css';
import { Link } from "react-router-dom";

const Header = () =>{
	return (
		<div className="app-header">
			<h3><Link to=''>Game of Thrones DB</Link></h3>
			<ListGroup as='ul' horizontal>
				<ListGroupItem as='li'><Link to='characters'>Characters</Link></ListGroupItem>
				<ListGroupItem as='li'><Link to='houses'>Houses</Link></ListGroupItem>
				<ListGroupItem as='li'><Link to='books'>Books</Link></ListGroupItem>
			</ListGroup>
		</div>
	)
}

export default Header;