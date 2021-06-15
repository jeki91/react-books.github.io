import React from 'react';

const Paggination = React.memo(function Paggination({postsPerPage, totalPosts,paginate,cur}) {

	const pageNumbers = [];
	for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
		pageNumbers.push(index)
	}
	React.useEffect(() => {
		
		
		window.scrollTo(0, 0);
	},[cur])
	
	return (
		<div className="pagging">
			<ul className="pagging__list">
				{
					pageNumbers.map(num => (
						<li key={num}>
							<a onClick={() => paginate(num)} href="#!" 
							className={cur === num ? "pagging__item _active" :"pagging__item"}
							>
								{num}
							</a>
						</li>
					))
				}
			</ul>
		
		</div>
	)
});


export default Paggination
	