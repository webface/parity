import React, { useState } from 'react';
import {Button ,Container, Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSnowflake, faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faPowerOff, faFire, faRecycle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './controls.scss';

export const Controls = (props) =>{
	const modes = [
		{name:"OFF",icon:faPowerOff},
		{name:"COOL",icon:faSnowflake},
		{name:"HEAT",icon:faFire},
		{name:"FAN",icon:faRecycle},
		{name:"AUTO",icon:faDotCircle}
	];
	const [isActive, setActive] = useState("OFF");
	const toggleModes = () =>{
		modes.some((mode,index,_arr) => {
			if(isActive===mode.name){
				setActive(index<modes.length-1?modes[index+1].name:modes[0].name);
				return true;
			}
			return false;
		});
	}
	return (
		<>
			<Container style={{marginTop:"50px"}}>
				<Row>
					<Col>
						<Card bg="secondary" text="dark" style={{maxWidth:"500px",margin:'auto'}}>
							<Card.Header>
								<Card.Text><FontAwesomeIcon className="mr-2" icon={faArrowRight}/>Controls</Card.Text>
								<Button onClick={toggleModes} variant="warning" >Toggle</Button>
							</Card.Header>
							<Card.Body>
								<div className="panel">
								{modes.map(({name,icon}) => {
									return <div
									key={name}  
									className={isActive === name ? "mode active" : "mode"}
									onClick={() => setActive(name)} 
									style={{ color: isActive === name ? "green" : "darkgrey" }}>
										<div><FontAwesomeIcon size='3x' icon={icon} /></div>
										<p>{name}</p>
									
									</div>
								})}
								</div>		
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
	  	</>
	);



}