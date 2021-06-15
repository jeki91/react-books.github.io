import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { BookBlock,BooksLoadingBlock,Paggination} from '../components/';
import {fetchBooks} from '../redux/actions/books';

const Products = React.memo(function Products() {
	const items = useSelector(({books}) => books.items);
	const isLoaded = useSelector(({books}) => books.isLoaded);
	const {category} = useSelector(({filters}) => filters);

	
	
	const dispatch = useDispatch();

		React.useEffect(() => {
			dispatch(fetchBooks(category));
			setCurrentPage(1);
	}, [category]);

	// pagination
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(20);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentItems = items.slice(indexOfFirstPost,indexOfLastPost);
	
	const paginate = (PageNumber) => setCurrentPage(PageNumber);
	return (
		<div className="page__content category-page">
			<h2 className="category-page__title">{category}</h2>
				<div className="category-page__item">
					<div className="products">
						<div className="products__items">
							{isLoaded
										 ? 
										 currentItems.map((obj) => (<BookBlock obj={obj} key={obj.id} isLoading={true} {...obj} />))

										 :	 
										 Array(15).fill(0).map((_, index)=><BooksLoadingBlock key={index}/>)
							}
						</div>

						<Paggination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} cur={currentPage}/>
					</div>			
				</div>
		</div>
	)
});


export default Products
