import React from 'react';
import Swiper from 'react-id-swiper';

import slide1Webp from '../assets/img/slider/slide1-book.webp';
import slide1Jpg from '../assets/img/slider/slide1-book.jpg';
import slide1BgWebp from '../assets/img/slider/slide1.webp';
import slide1BgJpg from '../assets/img/slider/slide1.jpg';
 
const Slider = () => {
	const ref = React.useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const params = {
	containerClass: 'mainslider__body _swiper',
	slidesPerView: 1,
	loop: true,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
 }

  return (
	<div className="baner-page__slider mainslider">
	  <Swiper {...params} ref={ref}>
	  <div className="mainslider__slide">
		<div className="mainslider__content content-mainslider">
			<div className="content-mainslider__image">
				<div className="content-mainslider__img">
				<picture><source srcSet={slide1Webp} type="image/webp"/><img src={slide1Jpg} alt=""/></picture>
				</div>
			</div>
			<div className="content-mainslider__body">
				<h1 className="content-mainslider__title">A Wanted Man</h1>
				<p className="content-mainslider__subtitle">(Jack Reacher #18)</p>
				<p className="content-mainslider__text">By Lee Child</p>
			</div>
		</div>
		<div className="mainslider__image">
			<picture><source srcSet={slide1BgWebp} type="image/webp"/><img src={slide1BgJpg} alt=""/></picture>
		</div>
		</div>
        

			<div className="mainslider__slide">
		<div className="mainslider__content content-mainslider">
			<div className="content-mainslider__image">
				<div className="content-mainslider__img">
				<picture><source srcSet={slide1Webp} type="image/webp"/><img src={slide1Jpg} alt=""/></picture>
				</div>
			</div>
			<div className="content-mainslider__body">
				<h1 className="content-mainslider__title">A Wanted Man</h1>
				<p className="content-mainslider__subtitle">(Jack Reacher #17)</p>
				<p className="content-mainslider__text">By Lee Child</p>
			</div>
		</div>
		<div className="mainslider__image">
			<picture><source srcSet={slide1BgWebp} type="image/webp"/><img src={slide1BgJpg} alt=""/></picture>
		</div>
		</div>
	  </Swiper>
	  <div className="mainslider__arrow mainslider__arrow_prev" onClick={goPrev}></div>
	  <div className="mainslider__arrow mainslider__arrow_next" onClick={goNext}></div>
	</div>
 );
}
 
export default Slider;



