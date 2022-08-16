import React from "react";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/getService";
import RowBlock from "../rowBlock/rowBlock";

export default class CharacterPage extends React.Component {
	gotService = new GotService();

	state = {
		selectedChar: 130,
		error: false
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	onCharSelected = (id) => {
		this.setState({selectedChar: id});
	};

	render() {
		if(this.state.error) return <ErrorMessage/>

		const itemList = (
			<ItemList 
				onItemSelected={this.onCharSelected} 
				getData={this.gotService.getAllCharacters} 
				maxPages={214}
				renderItem={({name}) => name}
			/>
		)

		const charDetails = (
			<ItemDetails itemId={this.state.selectedChar} getData={this.gotService.getCharacter}>
				<Field field='gender' label='Gender'/>
				<Field field='born' label='Born'/>
				<Field field='died' label='Died'/>
				<Field field='culture' label='Culture'/>
			</ItemDetails>
		)
		return (
			<RowBlock left={itemList} right={charDetails}/>
		)
	}
}