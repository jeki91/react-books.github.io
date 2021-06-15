import React from 'react';
import { Aside,Products} from '../components/';

const ProductsPage = React.memo(function ProductsPage() {
	
	
	return (
		<main className="page">
			<section className="page__products">
				<div className="page__container _container">
					<Aside />
					<Products/>
				</div>
			</section>
		</main>
	)
});


export default ProductsPage
