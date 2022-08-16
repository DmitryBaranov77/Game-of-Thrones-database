import React from "react";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/getService";
import RowBlock from "../rowBlock/rowBlock";

export default class BoooksPage extends React.Component {
	gotService = new GotService();

	state = {
		selectedBook: 3,
		error: false
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	onBookSelected = (id) => {
		this.setState({selectedBook: id});
	};

	render() {
		if(this.state.error) return <ErrorMessage/>

		const itemList = (
			<ItemList 
				onItemSelected={this.onBookSelected} 
				getData={this.gotService.getAllBooks} 
				maxPages={2}
				renderItem={({name}) => name}
			/>
		)

		const bookDetails = (
			<ItemDetails itemId={this.state.selectedBook} getData={this.gotService.getBook}>
				<Field field='numberOfPages' label='Number of pages'/>
				<Field field='publisher' label='Publisher'/>
				<Field field='released' label='Released'/>
			</ItemDetails>
		)
		return (
			<RowBlock left={itemList} right={bookDetails}/>
		)
	}
}