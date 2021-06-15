import React from 'react'
//import {useSelector,useDispatch} from 'react-redux';
import { Aside, Slider, Tabs} from '../components/';

//import {fetchBooks} from '../redux/actions/books';

import posterBookWebp from '../assets/img/poster-book.webp';
import posterBookJpg from '../assets/img/poster-book.jpg';




function Home() {
	//const dispatch = useDispatch();

	//const items = useSelector(({books}) => books.items);
	//const { category } = useSelector(({filters}) => filters);
	
	
	
	/*React.useEffect(() => {
		
			dispatch(fetchBooks(category));

	}, [category]);*/

	

	return (
		<main className="page">
		<section className="page__baner _container">
			<div className="baner-page">
				<Slider/>
				<div className="baner-page__sale-today sale-today-main">
					<div className="sale-today-main__body">
						<h2 className="sale-today-main__title">Deal of the Month</h2>
						<p className="sale-today-main__subtitle">The Human Face of Big Data</p>
						<div className="sale-today-main__image">
							<picture><source srcSet={posterBookWebp} type="image/webp"/><img src={posterBookJpg} alt=""/></picture>
						</div>
						<p className="sale-today-main__text">Save <span>45</span>% Today</p>
						<p className="sale-today-main__price">$<span>27.50</span></p>
						<a href="/" className="sale-today-main__btn">Buy now</a>
					</div>
				</div>
			</div> 
		</section> 
		
		
		
		<section className="page__products">
			<div className="page__container _container">
				<Aside />
				<Tabs/>
			</div>
		</section>

		
	</main>
	)
}

export default Home


//{category === 'null' ? <Tabs/> : <Products/>}