import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearCart, removeCartItem, plusCartItem, minusCartItem} from '../redux/actions/cart'

import emptyCart from '../assets/img/empty.png'

import CartItem from '../components/CartItem'

const Cart = React.memo(function Cart() {
	//очистка корзины 
	const dispatch = useDispatch();

	const {itemCart, totalPrice, totalCount} = useSelector(({cart}) => cart);
	//console.log(itemCart);

	const addedBooks = Object.keys(itemCart).map(key => {
		return itemCart[key].itemCart[0];
	});

	const onClearCart = ()=> {
		if (window.confirm('clean the cart?')) {
			dispatch(clearCart());
		}
	}

	const onRemoveItem = (id) => {
		if(window.confirm('delete this book?')){
			dispatch(removeCartItem(id));
		}
	}

	const onPlusItem = (id) => {
		dispatch(plusCartItem(id))
	}
	const onMinusItem = (id) => {
		dispatch(minusCartItem(id))
	}

	return (
		<div className="cart-page">
					<div className="cart-page__content _container">
					{
						totalCount ? <div className="cart-page__body">
							<div className="cart-page__header">
								<h1 className="cart-page__title">Cart</h1>
								<div
								onClick={onClearCart}
								 className="cart-page__cleare">Clear cart</div>
							</div>
							<div className="cart-page__items items-cart-page">
								{
									addedBooks.map(obj => 
									<CartItem 
										key={obj.id}
										id={obj.id}
										name={obj.title} 
										imageUrl={obj.imageUrl} 
										price={itemCart[obj.id].totalPrice} 
										count={itemCart[obj.id].itemCart.length}
										onRemove={onRemoveItem}
										onMinus={onMinusItem}
										onPlus={onPlusItem}
										/>)
								}
								
							</div>
							<div className="cart-page__info">
								<div className="cart-page__total"> Total items: <span>{totalCount}</span></div>
								<div className="cart-page__total"> Total price: <span>{totalPrice}$</span></div>
							</div>
							<div className="cart-page__nav">
								<Link to="/" className="cart-page__back">Back</Link>
								<div className="cart-page__by">By now</div>
							</div>
						</div> : <div className="cart-page__empty">
						<div className="cart-page__nav">
								<Link to="/" className="cart-page__back _empty">Back</Link>
							</div>
							<img src={emptyCart} alt=""/>
							
						</div>
					}
						
						
					</div>
				</div>
	)
});


export default Cart
