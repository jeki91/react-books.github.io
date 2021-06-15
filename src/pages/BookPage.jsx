import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {setCategory} from '../redux/actions/filters';
import {Button} from '../components';
import {addBookToCart} from '../redux/actions/cart';


import stock from '../assets/img/icons/InStock.png';
import pay1 from '../assets/img/pay-item/1.jpg';
import pay2 from '../assets/img/pay-item/2.jpg';
import pay3 from '../assets/img/pay-item/3.jpg';
import pay4 from '../assets/img/pay-item/4.png';

const BookPage = React.memo(function BookPage() {

	const item = useSelector(({currentBook}) => currentBook.items);
	const dispatch = useDispatch();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	
	//const {itemCart} = useSelector(({cart}) => cart);
	const addItemToCart =(obj)=> {
		dispatch(addBookToCart(obj))
	
	}
	const onAddBookToCart = ()=> {
		const obj = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			price: item.price
		};
		addItemToCart(obj);
	}
	
	const cartItems = useSelector(({cart}) => cart.itemCart);
	
	console.log('bookP');
	
	
	return (
		<main className="page">
				<div className="book">
					<div className="book__content _container">
						<div className="book__body">
							<div className="breadcrumbs">
								<nav>
									<ul className="breadcrumbs__list">
										<li onClick={()=> dispatch(setCategory(''))}><Link className="breadcrumbs__link" to="/" >Home</Link></li>
										<li onClick={()=> dispatch(setCategory(`${item.category}`))}><Link className="breadcrumbs__link" to="/products" >{item.category}</Link></li>
										<li onClick={()=> dispatch(setCategory(`${item.subCategory}`))}><Link className="breadcrumbs__link" to="/products" >{item.subCategory}</Link></li>  
									</ul>
								</nav>
							</div>
							<div className="book-info">
									<div className="book-info__instock">
										<img src={stock} alt=""/>
									</div>
									<div className="book-info__image">
									
										<img src={item.imageUrl} alt=""/>
										
									</div>
									<div className="book-info__body body-book-info">
										<h1 className="body-book-info__title">{item.title}</h1>
										<p className="body-book-info__text">
											{item.description}
										</p>
										<div className="body-book-info__price price-book-info">
											<div className="price-book-info__price">
												<div className="price-book-info__item">
													<p className="price-book-info__item-price">Our price : <span>${item.price}</span></p>
													{
														item.sale > 0 && (<p className="price-book-info__sale-info">Was $ {Math.ceil(item.price/ (1 - item.sale/100))} Save {item.sale}% </p>)
													}
													
												</div>
												<div className="price-book-info__item">
												<Button
													
													onClick={onAddBookToCart}
												 	className="price-book-info__button">Add to cart
													 { 
														 cartItems[item.id]&& (<span> ({cartItems[item.id].itemCart.length}) </span>)
														
													 }
													 
													 </Button>	
												</div>
											</div>
											<div className="price-book-info__pay">
												<p className="price-book-info__pay-scure">Safe, Secure Shopping</p>
												<ul className="price-book-info__pay-list">
													<li>
														<a className="price-book-info__pay-lik" href="#!"><img src={pay1} alt="" /></a>
													</li>
													<li>
														<a className="price-book-info__pay-lik" href="#!"><img src={pay2} alt="" /></a>
													</li>
													<li>
														<a className="price-book-info__pay-lik" href="#!"><img src={pay3} alt="" /></a>
													</li>
													<li>
														<a className="price-book-info__pay-lik" href="#!"><img src={pay4} alt="" /></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</main>
	)
});


export default BookPage
