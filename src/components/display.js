import React, { useState, useRef, useEffect } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import data from '../data/thermostat.json';
import './display.scss';
import CanvasJSReact from '../assets/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Display = (props)=>{
	let [count, updateCount] = useState(0);
	
	updateCount = ()=>{
		if(count < dataPoints[0].length -1){
			count= count +1;
		}else{
			count= 0;
		}
		
	}
	const liveData = [[],[],[]];
	const dataPoints = data.point_data.map((item) =>(
		item.graph_data.map((point)=>({
			x:new Date(point.x).valueOf(),
			y:point.actual
		}))
	))

	const graphData = data.point_data.map((item,index) =>({
		type: "line",
		xValueType: "dateTime",
		xValueFormatString: "D/M:hh:mm:ss TT",
		showInLegend: true,
		name: item.name,
		dataPoints:liveData[index]
	}))

	const updateInterval = 1000;

	const options = {
		animationEnabled: true,	
		title:{
			text: "Temperature °C"
		},
		axisY : {
			title: "°C",
			includeZero: true
		},
		axisX: {
			title: "Time of day",
			interval: 1
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			verticalAlign: "top",
			fontSize: 14,
			fontColor: "dimGrey"
		},
		data: graphData
	}

	let chart = useRef();

	const updateChart=()=> {
		dataPoints.forEach((range,index) => {
			liveData[index].push({
				x:range[count].x,
				y:range[count].y
			});
			
		});
		updateCount();
		liveData.forEach(dps=>{
			if (dps.length >  5 ) {
				dps.shift();
			}
		})

		chart.render();
	}

	useEffect(() => {
		setInterval(updateChart, updateInterval);
	},[])

	return (
		<>
			<Container style={{marginTop:"10px"}}>
				<Row>
					<Col>
						<Card bg="secondary" text="dark" style={{maxWidth:"500px",margin:'auto'}}>
							<Card.Body>
								<div className="panel-display">
									<CanvasJSChart options = {options} 
										onRef={ref => chart = ref}
									/>
								</div>		
							</Card.Body>
							
						</Card>
					</Col>
				</Row>
			</Container>
	  	</>
	);
}