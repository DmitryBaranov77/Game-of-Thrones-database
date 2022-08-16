import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import './itemDetails.css';

const Field = ({item, field, label}) => {
	return(
		<ListGroupItem as="li">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</ListGroupItem>
	)
}

export {Field};

export default class ItemDetails extends React.Component{
	getData = this.props.getData;

	state ={
		item: null
	};

	componentDidMount() {
		this.updateItem();
	};

	updateItem() {
		const {itemId} = this.props;
		if(!itemId) return;

		this.getData(itemId)
			.then(item => {
				this.setState({item})
			})
	};

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId){
			this.updateItem();
		}
	}


	render() {
		if(!this.state.item) return <span>Please select an item</span>

		const {item} = this.state;
		const {name} = item;

		return (
			<div className="rounded card-block">
				<h4>{name}</h4>
				<ListGroup as="ul" variant="flush">
					{
						React.Children.map(this.props.children, child => {
							return React.cloneElement(child, {item});
						})
					}
				</ListGroup>
			</div>
		)
	}
}

