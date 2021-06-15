import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {setCurrentBook} from '../../redux/actions/currentBook';

function BookBlock({title,imageUrl,sale,price,obj}) {
	const dispatch = useDispatch();
	const onSelectBook = React.useCallback((item) => {
		dispatch(setCurrentBook(item));
	}, []);
	
	return (
		
		<Link to="/book" className="products__item item-product" onClick={()=>onSelectBook(obj)}>
			{sale > 0 && (
				<div className="item-product__sale"><span>{sale}%</span>Off</div>
			)

			}
			
			<div className="item-product__image">
			<picture><source srcSet={imageUrl} type="image/webp"/><img src={imageUrl} alt=""/></picture>
			</div>
			<h3 className="item-product__title">{title}</h3>
			<p className="item-product__price">$<span>{price}</span></p>
		</Link>
		
	)
}

BookBlock.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sale: PropTypes.number.isRequired
};
BookBlock.defaultProps = {
	title: '---',
	price: 0,
	sale: 0
}

export default BookBlock
