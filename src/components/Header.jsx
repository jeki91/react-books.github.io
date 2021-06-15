import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import logoWebP from '../assets/img/logo.webp';
import logoPng from '../assets/img/logo.png';
import {Button, HeaderNav, HeaderTop} from '../components';
import Search from './Search';
import {useDispatch,useSelector} from 'react-redux';
import {setCategory} from '../redux/actions/filters';

const categoryItems = [
	'Computers',
	'Cooking',
	'Education',
	'Fiction',
	'Health',
	'Mathematics',
	'Medical',
	'Reference',
	'Science'
];

const Header = React.memo(function Header() {
	

	const [menu, setMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const dispatch = useDispatch();
	const {category} = useSelector(({filters}) => filters);

	const onSelectCategory = React.useCallback((item) => {
		dispatch(setCategory(item));
	}, [menu]);

	const burgerClick = () => {
		setMenu(!menu)
	}
	
	useEffect(() => {
		
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', changeWidth)
		
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, []);

	//как только изменится значение count или price, то header сделает ререндер
	//вытаскиваем значения из редьюсера
	const {totalPrice,totalCount} = useSelector(({ cart }) => ({
		totalPrice: cart.totalPrice,
		totalCount: cart.totalCount,
	}));
	
	console.log('header render');
	return (
		<header className="header">
		<div className="header__content">
			{
				screenWidth > 860 && (
					<HeaderTop />
				)
			}
			
			<div className="header__body body-header">
				<div className="body-header__content _container">
					<Link to="/">
					<div onClick={()=> dispatch(setCategory(''))} className="body-header__logo"><picture><source srcSet={logoWebP} type="image/webp"/><img src={logoPng} alt=""/></picture></div>
					</Link>
					<div className="body-header__body">
					{
				screenWidth > 860 && (
					<Search />
				)
			}
						<div className="body-header__cart cart-header">
							<div className="cart-header__top">
								<Link to="/cart" >
								<div className="cart-header__cart">
									<svg xmlns="http://www.w3.org/2000/svg" width="26.5" height="29" viewBox="0 0 26.5 29">
										<path className="cls-1" d="M855.328,54.22q-0.455.987-1.1,2.614t-1.365,3.5q-0.719,1.874-1.418,3.807t-1.27,3.483q-0.57,1.554-1.288,3.523a7.592,7.592,0,0,1-.682,1.23,1.288,1.288,0,0,1-1.138.55h-13.1a1.419,1.419,0,0,1-1.193-.569,3.651,3.651,0,0,1-.625-1.212l-3.067-11.475a1.62,1.62,0,0,1,.132-1.287,1.907,1.907,0,0,1,1.684-.53h19.314l2.274-4.922a1.454,1.454,0,0,1,.946-0.873,1.661,1.661,0,0,1,1.134.1,1.717,1.717,0,0,1,.816.794A1.379,1.379,0,0,1,855.328,54.22Zm-17.04,24.049A2.724,2.724,0,0,1,835.561,81a2.676,2.676,0,0,1-1.97-.8,2.627,2.627,0,0,1-.795-1.93,2.7,2.7,0,0,1,.795-1.951,2.645,2.645,0,0,1,1.97-.814,2.593,2.593,0,0,1,1.928.814A2.7,2.7,0,0,1,838.288,78.269Zm9.5,0A2.715,2.715,0,0,1,845.066,81a2.675,2.675,0,0,1-1.97-.8,2.628,2.628,0,0,1-.8-1.93,2.7,2.7,0,0,1,.8-1.951,2.643,2.643,0,0,1,1.97-.814,2.605,2.605,0,0,1,1.932.814A2.7,2.7,0,0,1,847.792,78.269Z" transform="translate(-829 -52)"/>
									</svg>
								</div>
								</Link>
								<span className="item-cart">{totalCount}</span>
								<div className="cart-header__count">
									Your cart
									<span>({totalCount} items)</span>
								</div>
							</div>
							<div className="cart-header__bottom">
								<div className="cart-header__price">$<span>{totalPrice}</span></div>
								<Link to="/cart">
									<Button className="cart-header__btn">Checkout</Button>
								</Link>
							</div>
						</div>
						<a href="/" className="body-header__wish wish-header">
							<div className="wish-header__img">
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
									<path className="cls-1" d="M1078.5,62A12.5,12.5,0,1,0,1091,74.5,12.5,12.5,0,0,0,1078.5,62Zm4.52,19.455-4.58-2.409-4.57,2.409,0.87-5.1-3.71-3.613,5.12-.744,2.29-4.64,2.29,4.64,5.12,0.744-3.7,3.613Z" transform="translate(-1066 -62)"/>
								</svg>
								<span>20</span>
							</div>
							<div className="wish-header__text">Wish list</div>
						</a>
						<div onClick={burgerClick} className={classNames('menu__icon icon-menu', menu ? '_active' : '')}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
			

			{(menu || screenWidth > 860) && (
			<div className="header__bottom bottom-header">
			 	
				{
					screenWidth < 860 && (
						<HeaderTop />
					)
				}
				
				<div className="bottom-header__content _container">
				
					<HeaderNav closeMenu={setMenu} activeCategory={category} onClickItem={onSelectCategory} items={categoryItems} />
				</div>
			</div>
			)}
			{
				screenWidth < 860 && (
					<Search />
				)
			}
			
		</div>
	</header>
	);
}
);

export default Header;
