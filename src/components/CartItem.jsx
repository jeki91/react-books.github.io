import React from 'react'
import Button from './Button'


function CartItem({id, name, imageUrl, price, count, onRemove, onMinus, onPlus}) {
	const handleRemoveClick = () => {
		onRemove(id)
	};

	const handlePlusItem = () => {
		onPlus(id)
	}

	const handleMinusItem = () => {
		onMinus(id)
	}

	return (
		<div className="items-cart-page__item ">
									<div className="items-cart-page__body">
										<div className="items-cart-page__left">
											<div className="items-cart-page__img">
												<img src={imageUrl} alt=""/>
											</div>
											<h2 className="items-cart-page__title">{name}</h2>
										</div>
										<div className="items-cart-page__right">
											<div className="items-cart-page__count count-items-cart">
												<div onClick={handleMinusItem} className="count-items-cart__btn">-</div>
												<span>{count}</span>
												<div onClick={handlePlusItem} className="count-items-cart__btn">+</div>
											</div>
											<div className="items-cart-page__price">{price}$</div>
											<Button onClick={handleRemoveClick} className="items-cart-page__remove-item">x</Button>
										</div>
									</div>
								</div>
	)
}

export default CartItem
