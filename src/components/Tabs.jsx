import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BookBlock, BooksLoadingBlock,Paggination} from '../components/';
import {useSelector,useDispatch} from 'react-redux';
import {fetchBooksTab} from '../redux/actions/books';
import {setTab} from '../redux/actions/filters';

const Tabs = React.memo(function Tabs() {
	const tabLinks = ['Best sellers','New Arrivals','Used Books','Special Offers'];
	const [tabActive, setTabActive] = React.useState('Best sellers');
	const {tabs} = useSelector(({filters}) => filters);

	const onClickTab = (name) => {
		setTabActive(name);
	};
	const dispatch = useDispatch();
	React.useEffect(() => {
		
		dispatch(fetchBooksTab( tabs ));
		setCurrentPage(1);
}, [tabs]);

	const items = useSelector(({books}) => books.tab);
	const isLoaded = useSelector(({books}) => books.isLoaded);
	const onSelectTab = React.useCallback((item) => {
		dispatch(setTab(item));
	}, []);

	//pagination
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(15);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentItems = items.slice(indexOfFirstPost,indexOfLastPost);
	
	const paginate = (PageNumber) => setCurrentPage(PageNumber);
	return (
		<div className="page__content content-page">
			<div className="content-page__nav">
				{
					tabLinks.map((title,index)=>(
						<div
							key={title+index}
							onClick={()=> {onClickTab(title); onSelectTab(title)}}
							 className={classNames ('content-page__tab-title', tabActive === title ? '_active' : '')}>{title}</div>
					))
				}
				
			</div>
			<div className="content-page__tab-content">
					<div className="content-page__item">
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
		</div>
	)
});


Tabs.propTypes = {
	tab: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Tabs.defaultProps = {
	tab: []
}

export default Tabs






/*import React from 'react';
import classNames from 'classnames';
import { BookBlock, BooksLoadingBlock} from '../components/';
import {useSelector} from 'react-redux';

function Tabs() {
	const [toggleState, setToggleState] = React.useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	}

	
	
	const items = useSelector(({books}) => books.items);
	const isLoaded = useSelector(({books}) => books.isLoaded);

	let newArr = [];
	
	for (let index = 0; index < items.length; index++) {
		const element = items[index];
		if (element.flt){
			if(element.flt.includes("bestSellers")){
				newArr.push(element)
			};
		}
			
	}
	
	return (
		<div className="page__content content-page _tabs">
						<div className="content-page__nav">
							<div
								 onClick={() => toggleTab(1)}
								 className={classNames ('content-page__tab-title', toggleState === 1 ? '_active' : '')}
								  >Best sellers</div>
							<div 
							onClick={() => toggleTab(2)} 
							className={classNames ('content-page__tab-title', toggleState === 2 ? '_active' : '')}
							>New Arrivals</div>
							<div 
							onClick={() => toggleTab(3)}
							className={classNames ('content-page__tab-title', toggleState === 3 ? '_active' : '')}
							>Used Books</div>
							<div
							 onClick={() => toggleTab(4)}
							 className={classNames ('content-page__tab-title', toggleState === 4 ? '_active' : '')}
							 >Special Offers</div>
						</div>
						<div className="content-page__tab-content">
							<div  className={classNames ('content-page__item _tabs-block', toggleState === 1 ? '_active' : '')}>
								<div className="products">									
									<div className="products__items">
										{isLoaded
										 ? 
										 newArr.map((obj) => (<BookBlock key={obj.id} isLoading={true} {...obj} />))

										 :	 
										 Array(15).fill(0).map((_, index)=><BooksLoadingBlock key={index}/>)
										}
										
									</div>
									<div className="pagging">
									<a href="#" className="pagging__arrow"></a>
									<ul className="pagging__list">
										<li>
											<a href="/" className="pagging__item _active">1</a>
										</li>
										<li>
											<a href="/" className="pagging__item">2</a>
										</li>
										<li>
											<a href="/" className="pagging__item">3</a>
										</li>
										<li>
											<a href="/" className="pagging__item">4</a>
										</li>
										<li>
											<a href="/" className="pagging__item">5</a>
										</li>
									</ul>
									<a href="#" className="pagging__arrow"></a>
								</div>
								</div>
								
							</div>
							<div className={classNames ('content-page__item _tabs-block', toggleState === 2 ? '_active' : '')}>
							<div className="products">									
									<div className="products__items">
										{isLoaded
										 ? 
										 items.map((obj) => (<BookBlock key={obj.id} isLoading={true} {...obj} />))

										 :	 
										 Array(15).fill(0).map((_, index)=><BooksLoadingBlock key={index}/>)
										}
										
									</div>
									<div className="pagging">
									<a href="#" className="pagging__arrow"></a>
									<ul className="pagging__list">
										<li>
											<a href="/" className="pagging__item _active">1</a>
										</li>
										<li>
											<a href="/" className="pagging__item">2</a>
										</li>
										<li>
											<a href="/" className="pagging__item">3</a>
										</li>
										<li>
											<a href="/" className="pagging__item">4</a>
										</li>
										<li>
											<a href="/" className="pagging__item">5</a>
										</li>
									</ul>
									<a href="#" className="pagging__arrow"></a>
								</div>
								</div>
							</div>
							<div className={classNames ('content-page__item _tabs-block', toggleState === 3 ? '_active' : '')}>
							<div className="products">									
									<div className="products__items">
										{isLoaded
										 ? 
										 items.map((obj) => (<BookBlock key={obj.id} isLoading={true} {...obj} />))

										 :	 
										 Array(15).fill(0).map((_, index)=><BooksLoadingBlock key={index}/>)
										}
										
									</div>
									<div className="pagging">
									<a href="#" className="pagging__arrow"></a>
									<ul className="pagging__list">
										<li>
											<a href="/" className="pagging__item _active">1</a>
										</li>
										<li>
											<a href="/" className="pagging__item">2</a>
										</li>
										<li>
											<a href="/" className="pagging__item">3</a>
										</li>
										<li>
											<a href="/" className="pagging__item">4</a>
										</li>
										<li>
											<a href="/" className="pagging__item">5</a>
										</li>
									</ul>
									<a href="#" className="pagging__arrow"></a>
								</div>
								</div>
							</div>
							<div className={classNames ('content-page__item _tabs-block', toggleState === 4 ? '_active' : '')}>
							<div className="products">									
									<div className="products__items">
										{isLoaded
										 ? 
										 items.map((obj) => (<BookBlock key={obj.id} isLoading={true} {...obj} />))

										 :	 
										 Array(15).fill(0).map((_, index)=><BooksLoadingBlock key={index}/>)
										}
										
									</div>
									<div className="pagging">
									<a href="#" className="pagging__arrow"></a>
									<ul className="pagging__list">
										<li>
											<a href="/" className="pagging__item _active">1</a>
										</li>
										<li>
											<a href="/" className="pagging__item">2</a>
										</li>
										<li>
											<a href="/" className="pagging__item">3</a>
										</li>
										<li>
											<a href="/" className="pagging__item">4</a>
										</li>
										<li>
											<a href="/" className="pagging__item">5</a>
										</li>
									</ul>
									<a href="#" className="pagging__arrow"></a>
								</div>
								</div>
							</div>
						</div>
				</div>
	)
}

export default Tabs*/
