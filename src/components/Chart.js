import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels: ['Amazonas', 'Cajamarca', 'Huánuco', 'Pasco'],
				datasets:[
					{
						label: 'Modulo 1',
						background:'rgb(68,114,196)',
						data:[ 45, 50, 25, 35]
					},
					{
						label: 'Modulo 2',
						background:'#C0504E',
						data:[ 45, 50, 25, 30]
					},
					{
						label: 'Modulo 3',
						background:'#A9D18E',
						data:[ 31, 48, 23, 25]
					}

				]
			}
		}
	}
	render(){
		return(
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={{
						title:{
							display: true,
							text: 'Número de Docentes que completan los Módulos',
							fontSize: 25
						},
						legend:{
							display: true,
							position: 'right'
						}
					}}>
				</Bar>
			</div>
		)
	}
}

export default Chart;