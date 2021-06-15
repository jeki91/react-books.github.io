import React from 'react';

const SortPopup = React.memo(function SortPopup({ items, onClickSortType, activeSortType }) {
	console.log('rendered sprt');
	const [visiblePopup, setVisiblePopup] = React.useState(false);
	//const [activeItem, setActiveItem] = React.useState(0);
	const sortRef = React.useRef(); //сохраняем ссылку на дом элемент
	const activeLabel = items.find(obj => obj.type === activeSortType).name;
	
	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};

	// получаем ссылку на дом элемент в обьекте (поле current)
	
	//* ЕСЛИ МЫ ХОТИМ ХРАНИТЬ ССЫЛКУ НА ДОМ ЭЛЕМЕНТ - ИСПОЛЬЗУЕМ React.useRef()*/
	const handleOutsideClick = (e) => {
		if (!e.path.includes(sortRef.current)) {
			setVisiblePopup(false);
			//если произведен клик вне блока <div ref={sortRef} className="popup-learn__body">, тогда скрываем попап
		}
	}

	React.useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	},[])
	//*React.useEffect() ПОСЛЕ ПЕРВОГО РЕНДЕРАЕСЛИ НИКАКИЕ ЗАВИСИМОСТИ НЕ ИЗМЕНИЛИСЬ [], ТО ВЕШАЕМ ОБРАБОТЧИК КЛИК document.body.addEventListener('click', handleOutsideClick);
	//*

	const onSelectItem = (index) => {
		onClickSortType(index);
		setVisiblePopup(false);
	};
	
	return (
		<div className="popup-learn">
			<div className="popup-learn__content _container">
			<div ref={sortRef} className="popup-learn__body">
			<div className="popup-learn__link">
					<span>строка</span>
					<span className="link" onClick={toggleVisiblePopup}>{activeLabel}</span>
					{visiblePopup &&  <div className="popup-learn__block">
						<ul>
						{
					items && items.map
					((obj, index) => 
							<li onClick={()=> onSelectItem(obj.type)} className={activeSortType === obj.type ? '_active' : ''} key={`${obj.type}_${index}`}>
								{obj.name}
							</li>
					)
				}
						</ul>
					</div>}
				</div>
			</div>
			</div>
		</div>
	)
}
);
export default SortPopup
//<span className="link" onClick={() => setVisiblePopup(!visiblePopup)}>ссылка</span>
// При клике на "ссылка" изменить значение visiblePopup на true или false
//update
//выносим нашу анонимную функцию в переменную для оптимизации кода
//const toggleVisiblePopup = () => {
//	setVisiblePopup(!visiblePopup);
//};
// результат в верстке
//onClick={toggleVisiblePopup} 
//visiblePopup && - если visiblePopup true, то сделать рендер кода. иначе его не рендерить

