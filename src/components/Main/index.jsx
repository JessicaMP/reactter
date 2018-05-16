import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
	constructor() {
		super()
		this.state = {
			messages: [
				{text: 'Mensage del tweet',
				picture: 'https://animalwelfaresociety.org/wp-content/uploads/2018/04/awscat-diamond0418.jpg',
				displayName: 'Jessica Manturano',
				username: 'JessicaMP',
				date: Date.now() - 180000},
				{
					text: 'Este es un nuevo mensaje',
					picture: 'https://animalwelfaresociety.org/wp-content/uploads/2018/04/awscat-diamond0418.jpg',
					displayName: 'Jessica Manturano',
					username: 'JessicaMP',
					date: Date.now() - 1800000
				}
			]
		}
	}

	render() {
		return (
			<MessageList messages={this.state.messages} />
		)
	}
}

export default Main