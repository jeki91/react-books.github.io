import React from 'react'


import pay01Webp from '../assets/img/pay/01.webp';
import pay02Webp from '../assets/img/pay/02.webp';
import pay03Webp from '../assets/img/pay/03.webp';
import pay01Png from '../assets/img/pay/01.png';
import pay02Png from '../assets/img/pay/02.png';
import pay03Png from '../assets/img/pay/03.png';

function Footer() {
	return (
		<footer className="footer">
		<div className="footer__content">
			<div className="footer__top top-footer">
				<div className="top-footer__content _container">
					<div className="top-footer__body">
						<div className="top-footer__item">
							<h2 className="top-footer__title">Biography & True Stories</h2>
							<ul className="top-footer__list">
								<li><a href="/" className="top-footer__link">General</a></li>
								<li><a href="/" className="top-footer__link">Diaries, Letters & Journals</a></li>
								<li><a href="/" className="top-footer__link">Memoirs</a></li>
								<li><a href="/" className="top-footer__link">True Stories</a></li>
								<li><a href="/" className="top-footer__link">Generic Exams</a></li>
								<li><a href="/" className="top-footer__link">GK Titles</a></li>
								<li><a href="/" className="top-footer__link">Medical Entrance</a></li>
								<li><a href="/" className="top-footer__link">Other Entrance Exams</a></li>
								<li><a href="/" className="top-footer__link">PG Entrance Examinations</a></li>
								<li><a href="/" className="top-footer__link">Self-help Titles</a></li>
								<li><a href="/" className="top-footer__link">Sociology</a></li>
							</ul>
						</div>
						<div className="top-footer__item">
							<h2 className="top-footer__title">Professional & Reference </h2>
							<ul className="top-footer__list">
								<li><a href="/" className="top-footer__link">Academic and Reference</a></li>
								<li><a href="/" className="top-footer__link">Business Trade</a></li>
								<li><a href="/" className="top-footer__link">Engineering and Computer Science</a></li>
								<li><a href="/" className="top-footer__link">Humanities, Social Sciences and Languages</a></li>
								<li><a href="/" className="top-footer__link">Introduction to Computers</a></li>
								<li><a href="/" className="top-footer__link">Science and Maths</a></li>
								<li><a href="/" className="top-footer__link">Trade Business</a></li>
								<li><a href="/" className="top-footer__link">English Language & Literature</a></li>
								<li><a href="/" className="top-footer__link">English Language Teaching</a></li>
								<li><a href="/" className="top-footer__link">Environment Awareness</a></li>
								<li><a href="/" className="top-footer__link">Environment Protection</a></li>
							</ul>
						</div>
						<div className="top-footer__item">
							<h2 className="top-footer__title">Earth Sciences</h2>
							<ul className="top-footer__list">
								<li><a href="/" className="top-footer__link">Earth Sciences</a></li>
								<li><a href="/" className="top-footer__link">Geography</a></li>
								<li><a href="/" className="top-footer__link">The Environment</a></li>
								<li><a href="/" className="top-footer__link">Regional & Area Planning</a></li>
								<li><a href="/" className="top-footer__link">Fantasy</a></li>
								<li><a href="/" className="top-footer__link">Gay</a></li>
								<li><a href="/" className="top-footer__link">Humorous</a></li>
								<li><a href="/" className="top-footer__link">Interactive</a></li>
								<li><a href="/" className="top-footer__link">Legal</a></li>
								<li><a href="/" className="top-footer__link">Lesbian</a></li>
								<li><a href="/" className="top-footer__link">Men'S Adventure</a></li>
							</ul>
						</div>
						<div className="top-footer__item">
							<h2 className="top-footer__title">Mathematics</h2>
							<ul className="top-footer__list">
								<li><a href="/" className="top-footer__link">Algebra</a></li>
								<li><a href="/" className="top-footer__link">Differential Equations</a></li>
								<li><a href="/" className="top-footer__link">Discrete Mathematics</a></li>
								<li><a href="/" className="top-footer__link">Fourier Analysis</a></li>
								<li><a href="/" className="top-footer__link">Numerical Analysis</a></li>
								<li><a href="/" className="top-footer__link">Probability</a></li>
								<li><a href="/" className="top-footer__link">Statistical Methods/data Analysis</a></li>
								<li><a href="/" className="top-footer__link">Stochastic And Random Processes</a></li>
								<li><a href="/" className="top-footer__link">Topology</a></li>
								<li><a href="/" className="top-footer__link">Statistics</a></li>
								<li><a href="/" className="top-footer__link">Mathematics</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom bottom-footer">
				<div className="bottom-footer__content">
					<h2 className="bottom-footer__title">We accept all major Credit Card/Debit Card/Internet Banking</h2>
					<div className="bottom-footer__pays pays-footer">
						<ul className="pays-footer__list">
							<li>
								<a href="/" className="pays-footer__link">
									<picture><source srcSet={pay01Webp} type="image/webp"/><img src={pay01Png} alt=""/></picture>
								</a>
							</li>
							<li>
								<a href="/" className="pays-footer__link">
									<picture><source srcSet={pay02Webp} type="image/webp"/><img src={pay02Png} alt=""/></picture>
								</a>
							</li>
							<li>
								<a href="/" className="pays-footer__link">
									<picture><source srcSet={pay03Webp} type="image/webp"/><img src={pay03Png} alt=""/></picture>
								</a>
							</li>
						</ul>
					</div>
					<p className="bottom-footer__copyright">
						Conditions of Use Privacy Notice © 2012-2013, Booksonline, Inc. or its affiliates 
					</p>
				</div>
			</div>
		</div>
	</footer>
	)
}

export default Footer
