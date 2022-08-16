import React from "react";
import ItemDetails, { Field } from "../itemDetails/itemDetails";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage/errorMessage";
import GotService from "../../services/getService";
import RowBlock from "../rowBlock/rowBlock";

export default class HousesPage extends React.Component {
	gotService = new GotService();

	state = {
		selectedHouse: 3,
		error: false
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	onHouseSelected = (id) => {
		this.setState({selectedHouse: id});
	};

	render() {
		if(this.state.error) return <ErrorMessage/>

		const itemList = (
			<ItemList 
				onItemSelected={this.onHouseSelected} 
				getData={this.gotService.getAllHouses} 
				maxPages={45}
				renderItem={({name}) => name}
			/>
		)

		const houseDetails = (
			<ItemDetails itemId={this.state.selectedHouse} getData={this.gotService.getHouse}>
				<Field field='region' label='Region'/>
				<Field field='words' label='Words'/>
				<Field field='titles' label='Titles'/>
				<Field field='overlord' label='Overlord'/>
				<Field field='ancestralWeapons' label='Ancestral weapons'/>
			</ItemDetails>
		)
		return (
			<RowBlock left={itemList} right={houseDetails}/>
		)
	}
}