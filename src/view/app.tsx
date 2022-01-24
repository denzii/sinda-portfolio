import "../style/app.scss"
import '../style/header.scss';
import "../style/hero.scss"
import "../style/footer.scss"
import Nav from './nav';
import SocialMedia from './socialMedia';
import PersonalBackground from './personalBackground';
import ImageProps from "../type/imageProps";
import React from 'react';

type AppProps =  { headshot: ImageProps; background: ImageProps; };

// classNames given according to the BEM convention
const App: (props: AppProps) => JSX.Element = (props) =>  <>
	<React.StrictMode>
		<header role="banner" className="header">
				<h2 className='header__description header__description--hidden'> Navigation links pertaining to the various sections of the page. </h2>
				<Nav /> 
		</header>
		<hr/>
		<section role="img" className="hero" style={{backgroundImage: `url(${props.background.src})`}} aria-label={`${props.background.alt} & ${props.headshot.alt}`}>
			<h2 className='hero__description hero__description--hidden'> Presentational hero section images with a centered professional headshot and a background image.</h2>
			<img className="hero__foreground-image" srcSet={`${props.headshot.src} 0.60x`}  alt={props.headshot.alt} title={props.headshot.title} id="foreground"/>
		</section>
		<hr/>
		<section role="toolbar" className="social-media">
			<h2 className='social-media__description social-media__description--hidden'> Social Media Navigation Icons. </h2>
			<SocialMedia />
		</section>
		<hr/>
		<main role="feed" className="personal-background"> 
			<h2 className='personal-background__description personal-background__description--hidden'> Personal Background Sections. </h2>
			<PersonalBackground /> 
		</main>
		<hr/>
		<footer role="banner" className="footer"> 
			<h2 className='footer__description footer__description--hidden'> Copyright notice. </h2>
			<p className="footer__header__text"> © 2022 Sindagal, OpenSource. MIT </p>
		</footer>
	</React.StrictMode>
</>

export default App;

/**
 * @todo ✓ refactor BEM classnames to be more modular and move away from the hierarchical approach.
 * @todo ✓ investigate the invisible onFocus outline in Chrome 
 * @todo open social media links in a new tab instead of closing the site when clicked on
 * @todo make the professional headshot image a touch smaller for mobile
 * @todo decrease the shadow effect intensity on mobile and partially on desktop
 * @todo include  an optional "technologies used" text with a different font formatting underneath the images above the actual description
 * @todo add ease scroll effect when pressed on navigation section 
 * @todo make the highlight and zoom effects optional, remove them from elements without links (hobbies)
 * @todo add a  comprehensive readme
 * @todo proof read all content 
 * @todo forget about additional improvements apart from the above and move onto something else for a while
*/