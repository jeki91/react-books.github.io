import classNames from 'classnames';
import React from 'react'
import {Link} from 'react-router-dom'

const HeaderNav = React.memo(function HeaderNav({activeCategory,items,onClickItem,closeMenu}) {
	
	const [visibleMenu] = React.useState(true);

	const onSelectItem = (name) => {
		onClickItem(name);
	};
	
	console.log('nav');
	
	
	return (
			<div>
			{
				visibleMenu && (
			<nav className="bottom-header__menu">
				<ul className="bottom-header__list">
					{
						items && items.map
						((name, index) => 
								<li onClick={()=> {onSelectItem(name);closeMenu(false)}} key={`${name}_${index}`}>
								<Link to="/products">
									<p className={classNames('bottom-header__link', activeCategory === name ? '_active' : '')}>{name}</p>
									</Link>
								</li>
						)
					}
				</ul>
			</nav>
			)}
			</div>
	)
}  
);
  
export default HeaderNav
