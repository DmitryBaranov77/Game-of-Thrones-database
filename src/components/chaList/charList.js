import React from "react";
import { ListGroup, ListGroupItem, Spinner, Button } from "react-bootstrap";
import GotService from "../../services/getService";
import './charList.css';

export default class CharList extends React.Component{
	gotService = new GotService();

	state = {
		charList: null,
		currentPage: 2
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
		this.gotService.getAllCharacters(page)
				.then( charList => {
					this.setState({
						charList
					})
				})
	}

	nextPage = () => {
		this.setState(prevState => {
			if(prevState.currentPage > 213){
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
					currentPage: 214
				}
			}

			return {
				currentPage: prevState.currentPage - 1
			}
		})
	}

	renderItems(arr) {
		return arr.map(item => {
			return <ListGroupItem key={item.url} action onClick={() => this.props.onCharSelected(this.getId(item.url))}>{item.name}</ListGroupItem>
		})
	}

	getId(url){
		return url.split('https://www.anapioficeandfire.com/api/characters/')[1];
	}

	render() {
		const {charList, currentPage} = this.state;
		const content = charList ? this.renderItems(charList) : <div className="spinner"><Spinner as='h4' animation="grow" variant="dark" /></div>;

		return (
			<div className="list-block rounded">
				<ListGroup>
					{content}
				</ListGroup>
				<div className="pages-counter">
					<span>Page {currentPage} of 214</span>
					<div>
						<Button variant="dark" onClick={this.prevPage}>Prev</Button>
						<Button variant="dark" onClick={this.nextPage}>Next</Button>
					</div>
				</div>
			</div>
		)
	}
}
