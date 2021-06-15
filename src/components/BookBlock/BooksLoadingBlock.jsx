import React from 'react';
import ContentLoader from "react-content-loader";

function BooksLoadingBlock() {
	return (
		<ContentLoader 
		speed={2}
		width={160}
		height={270}
		viewBox="0 0 160 270"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	
	 >
		<circle cx="581" cy="314" r="20" /> 
		<rect x="25" y="0" rx="0" ry="0" width="110" height="160" /> 
		<rect x="25" y="170" rx="0" ry="0" width="110" height="48" /> 
		<rect x="49" y="227" rx="0" ry="0" width="65" height="25" />
	 </ContentLoader>
	)
}

export default BooksLoadingBlock
