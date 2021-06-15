import React from 'react';
import classNames from 'classnames';


function Button({onClick, className, children}) {
		
	return(
		<div>
			<button
				onClick={onClick}
				className={classNames(className)}>
				{children}
			</button>
		</div>
	);
}

export default Button;