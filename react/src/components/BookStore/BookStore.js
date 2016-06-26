import React, {Component} from 'react';
import BookList from '../BookList/BookList';

export default class BookStore extends Component {
	
	constructor(props,context) {
		super(props,context)

		this.state = {
			currentStep:1
		}
	}

	updateFormData = (formData) => {
		console.log(formData);
	}

	render() {
		switch (this.state.currentStep) {
			case 1:
				return <BookList  updateFormData={this.updateFormData}/>;
			default:
				return <div>Teste</div>;
		}
	}
}