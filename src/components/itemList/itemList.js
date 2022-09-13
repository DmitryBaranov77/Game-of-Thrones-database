import React from "react";
import { ListGroup, ListGroupItem, Spinner, Button } from "react-bootstrap";
import './itemList.css';
import PropTypes from 'prop-types';

export default class ItemList extends React.Component{
	getData = this.props.getData;
	maxPages = this.props.maxPages;

	state = {
		itemList: null,
		currentPage: 1
	}

	componentDidMount() {
		this.updateList(this.state.currentPage);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.currentPage !== prevState.currentPage){
			this.updateList(this.state.currentPage);
		}
	}

	updateList(page){
		this.getData(page)
			.then( itemList => {
				this.setState({
					itemList
				})
			})
	}

	nextPage = () => {
		this.setState(prevState => {
			if(prevState.currentPage > (this.maxPages - 1)){
				return {
					currentPage: 1
				}
			}

			return {
				currentPage: prevState.currentPage + 1
			}
		})
	}

	prevPage = () => {
		this.setState(prevState => {
			if(prevState.currentPage < 2){
				return {
					currentPage: this.maxPages
				}
			}

			return {
				currentPage: prevState.currentPage - 1
			}
		})
	}

	renderItems(arr) {
		return arr.map(item => {
			const {id} = item;
			const label = this.props.renderItem(item);
			return (
				<ListGroupItem 
					key={id} 
					action onClick={() => this.props.onItemSelected(id)}>
					{label}
				</ListGroupItem>
			)
		})
	}

	render() {
		const {itemList, currentPage} = this.state;
		const content = itemList ? this.renderItems(itemList) : <div className="spinner"><Spinner as='h4' animation="grow" variant="dark" /></div>;

		return (
			<div className="list-block rounded">
				<ListGroup>
					{content}
				</ListGroup>
				<div className="pages-counter">
					<span>Page {currentPage} of {this.maxPages}</span>
					<div>
						<Button variant="dark" onClick={this.prevPage}>Prev</Button>
						<Button variant="dark" onClick={this.nextPage}>Next</Button>
					</div>
				</div>
			</div>
		)
	}
}

ItemList.defaultProps = {
	onItemSelected: () => {}
}

ItemList.propTypes = {
	onItemSelected: PropTypes.func
}
