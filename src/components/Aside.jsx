import React from 'react'
import { Categories} from '../components/';
import classNames from 'classnames';
import {useDispatch,useSelector} from 'react-redux';
import {setCategory} from '../redux/actions/filters';


const categoriesNav = {'All':[],	
	'Fiction and Literature': [
		'Children',
		'Science Fiction',
		'Fantasy',
		'Mystery',
		'Romance',
		'Horror',
		'Poetry',
		'Literature',
		'Crime',
	],
	'Non - Fiction':[
		'Comic',
		'Cooking',
		'Psychology',
		'Medical',
		'Art',
		'Photography',
		'Law',
		'History',
		'Business',
		'Computers'
		],
	
	'Other':[
		'Baby',
		'Sex',
		'Travel',
		'Science',
		'Sports'
		],
	};


const Aside = React.memo(function Aside() {
	const dispatch = useDispatch();
	const [categories, setCategories] = React.useState(false);
	const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

	const {category} = useSelector(({filters}) => filters);
	
	//console.log('rendered aside'); //постоянно ререндерится??
	
	React.useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}
		
		window.addEventListener('resize', changeWidth)
		
		return () => {
		window.removeEventListener('resize', changeWidth);
		}	
	}, []);

	

	const burgerClick = () => {
		setCategories(!categories);
	};

	const onSelectCategory = React.useCallback((item) => {
		dispatch(setCategory(item));
	}, []);

	return (
		<aside className="page__categories">
			<nav className="categories">
				<div className="categories__header">
					<h2 className="categories__title">Categories</h2>
					<div onClick={burgerClick} className={classNames('categories__burger', categories ? '_active' : '')}>
						
							<span></span>
							<span></span>
							<span></span>
						
							</div>
					</div>
				{
					(categories || screenWidth > 860)&&(
						<Categories 
						closeCategory={setCategories}
						activeCategory={category}
						onClickCategory={onSelectCategory}
						cats={categoriesNav}/>
					)}
			</nav>
		</aside>
	)
});

export default Aside
