import classNames from 'classnames';
import React from 'react';
import {Link} from 'react-router-dom'


const Categories = React.memo(function Categories({activeCategory, cats, onClickCategory,closeCategory}) {
	
	
	
	const catsTitles = Object.keys(cats);
	const catsItems = Object.values(cats);
	React.useEffect(() => {
		
		window.scrollTo(0, 0);
	})

		
		return (
	<div>
			{ (
				<div className="categories__body">
			{catsTitles.map((name,ind) => (
				<div key={name+ind} className="categories__item item-category">
				<Link to="/products">
				<h2
					key={ind} 
					onClick={()=> {onClickCategory(name);closeCategory(false)}}
					className={classNames('item-category__category', 
					{
						'_active': activeCategory === name
					})}>{name}</h2>
				</Link>
				<ul  className="item-category__list"
						key={name+ind}
				>
				{catsItems[ind].map((item) => (
				
				<li key={item}
					
				>
				<Link to="/products">
					<p className="item-category__link"
						key={item}
						onClick={()=> {onClickCategory(item);closeCategory(false)}} className={classNames ('item-category__link', activeCategory === item ? '_active' : '')}
					>{item}</p>
				</Link>
				</li>
				
			))}
				</ul>
				</div>
			))}
			</div>
			)}
			
			</div>
		)
	});

export default Categories
