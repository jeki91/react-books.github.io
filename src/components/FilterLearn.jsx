import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
const avaibleType = ['один', 'два', 'три'];
const avaibleSizes = [10, 20, 30];

function FilterLearn({types,sizes}) {
	
	const [activeType, setActiveType] = React.useState(types[0]);
	const [activeSize, setActiveSize] = React.useState(sizes[0]);
	
	
	

	const onSelectType = (index) => {
		setActiveType(index);
	};
	const onSelectSize = (index) => {
		setActiveSize(index);
	};
	return (
		<div>
		<ul className="test-list">
				{avaibleType.map((type, index) => (
					<li 
						key={type}
						onClick={()=> onSelectType(index)} 
						className={classNames('test-li', 
							{
							'active': activeType === index,
							'disabled': !types.includes(index),
							})
						}>
						{type}
					</li>
				))}
			</ul>
			<ul className="test-list">
			{avaibleSizes.map((size, index) => (
					<li 
						key={size}
						onClick={()=> onSelectSize(index)} 
						className={classNames('test-li', 
							{
							'active': activeSize === index,
							'disabled': !sizes.includes(size),
							})
						}>
						{size} шт.
					</li>
				))}
			</ul>
			</div>
	)
}

FilterLearn.propTypes = {
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
   sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
FilterLearn.defaultProps = {
	types: [],
	sizes: []
}

export default FilterLearn
