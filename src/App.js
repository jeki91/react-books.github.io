import React from 'react';



import {Header,Footer} from './components';
import {Home, Cart, ProductsPage,BookPage} from './pages';
import { Route } from 'react-router';


function App(){
	
	/*window.test= () => {
		axios.get('http://localhost:3001/books').then(({data}) => {
			dispatch(setBooks(data.books));
		});
	}*/

	

	return (
		<div className="wrapper">
			<Header />
				<Route path="/" component={Home} exact/>
				<Route path="/products" component={ProductsPage} exact/>
				<Route path="/book" component={BookPage} exact/>
				<Route path="/cart" component={Cart} exact/>
			<Footer />
		</div>
	);
}

export default App;
/*
class App extends React.Component {
	componentDidMount(){
		axios.get('http://localhost:3000/db.json').then(({data}) => {
			this.props.setBooks(data.books);
		});
	}

	render(){
		return (
			<div className="wrapper">
			<Header />
				<Route path="/" render={() => <Home items={this.props.items}/>} exact/>
				<Route path="/cart" component={Cart} exact/>
			<Footer />
			</div>
		  );
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.books.items
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setBooks: (items) => dispatch(setBooksActions(items)),
		dispatch,
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
*/