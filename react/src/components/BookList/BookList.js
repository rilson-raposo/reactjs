import React, {Component} from 'react';

export default class BookList extends Component {

	constructor(props, context) {
		super(props,context);

		this.state = {
			books: [
				{ id: 1, name: 'Zero To One', author: 'Peter Thiel' },
				{ id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma'},
				{ id: 3, name:  'Wings of Fire', author: 'A.P.J. Abdul Kalam'}
			],
			selectedBooks: []
		}
		console.log(this.state);
	}

	_renderBook(book) {
		return (
			<div className="checkbox"  key={book.id}>
				<label> <input type="checkbox" 
						value={book.name}
						onChange={this.handleSelectedBook}/> {book.name} -- {book.author}
				</label>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h3> Choose from books</h3>
				<form onSubmit={this.handleSubmit}>
					{this.state.books.map( (book) => {
						return this._renderBook(book);
					})}
					<input type="submit" className="btn btn-success"/>
				</form>
			</div>
		);
	}

	handleSubmit = (event) => {
		
		event.preventDefault();
		console.log('Submited', this);
		this.props.updateFormData({selectedBooks: this.state.selectedBooks});
	}

	handleSelectedBook = (event) => {
		console.log('this', this);
		var selectedBooks = this.state.selectedBooks;
		var index = selectedBooks.indexOf(event.target.value);

		if (event.target.checked) {
			if (index===-1) 
				selectedBooks.push(event.target.value);
		} else {
			selectedBooks.splice(index,1);
		}

		this.setState({selectedBooks: selectedBooks});
	}
}