import React from "react";
import { Row, Col } from "react-bootstrap";

const RowBlock = ({left, right}) => {
	return(
		<Row>
			<Col lg='6'>
				{left}
			</Col>
			<Col lg='6'>
				{right}
			</Col>
		</Row>
	)
}

export default RowBlock;