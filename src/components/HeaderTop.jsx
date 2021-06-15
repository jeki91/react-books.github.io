import React from 'react'

function HeaderTop() {
	return (
		<div className="header__top top-header">
				<nav className="top-header__menu _container">
					<ul className="top-header__list">
						<li>
							<a href="/" className="top-header__link">Sign in</a>
						</li>
						<li>
							<a href="/" className="top-header__link"> My Account</a>
						</li>
						<li>
							<a href="/" className="top-header__link">Order Status</a>
						</li>
						<li>
							<a href="/" className="top-header__link">Help</a>
						</li>
					</ul>
				</nav>
			</div>
	)
}

export default HeaderTop
