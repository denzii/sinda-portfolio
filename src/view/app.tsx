import "../style/app.css"
import Nav from './nav';
import SocialMedia from './socialMedia';
import PersonalBackground from './personalBackground';
import ImageProps from "../type/imageProps";
import React from 'react';

type AppProps =  { headshot: ImageProps; background: ImageProps; };

const App: (props: AppProps) => JSX.Element = (props) =>  <>
	<React.StrictMode>
		<header role="banner">
			<nav>
				<h2 className='hidden'> Navigation links pertaining to the various sections of the page. </h2>
				<Nav /> 
			</nav>
		</header>
		<hr/>
		<section role="img" className={/*`header-image-container*/ `${props.background.imageStyleClass}`} aria-label={`${props.background.alt} & ${props.headshot.alt}`}>
			<h2 className='hidden'> Presentational hero section images with a centered professional headshot and a background image.</h2>
			<img srcSet={`${props.headshot.src} 0.60x`}  alt={props.headshot.alt} title={props.headshot.title}/>
		</section>
		<hr/>
		<section role="toolbar">
			<h2 className='hidden'> Social Media Navigation Icons. </h2>
			<SocialMedia />
		</section>
		<hr/>
		<main role="feed"> 
			<h2 className='hidden'> Personal Background Sections. </h2>
			<PersonalBackground /> 
		</main>
		<footer> 
			<h2 className='hidden'> Copyright notice. </h2>
			<p> By Sindagal OpenSource, Licensed as MIT. </p>
		</footer>
	</React.StrictMode>
</>

export default App;


//todo: 2px border around tabindex focused items
//todo dynamically contrasting border colour for focused items
