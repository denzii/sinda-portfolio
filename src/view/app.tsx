import "../style/app.css"
import '../style/header.css';
import "../style/hero.css"
import "../style/footer.css"
import Nav from './nav';
import SocialMedia from './socialMedia';
import PersonalBackground from './personalBackground';
import ImageProps from "../type/imageProps";
import React from 'react';

type AppProps =  { headshot: ImageProps; background: ImageProps; };


const App: (props: AppProps) => JSX.Element = (props) =>  <>
	<React.StrictMode>
		<header role="banner">
				<h2 className='hidden'> Navigation links pertaining to the various sections of the page. </h2>
				<Nav /> 
		</header>
		<hr/>
		<section role="img" id="hero" style={{backgroundImage: `url(${props.background.src})`}}
				 aria-label={`${props.background.alt} & ${props.headshot.alt}`}>
			<h2 className='hidden'> Presentational hero section images with a centered professional headshot and a background image.</h2>
			<img srcSet={`${props.headshot.src} 0.60x`}  alt={props.headshot.alt} title={props.headshot.title} id="foreground"/>
		</section>
		<hr/>
		<section role="toolbar" id="social-media">
			<h2 className='hidden'> Social Media Navigation Icons. </h2>
			<SocialMedia />
		</section>
		<hr/>
		<main role="feed" id="personal-background"> 
			<h2 className='hidden'> Personal Background Sections. </h2>
			<PersonalBackground /> 
		</main>
		<hr/>
		<footer id="footer"> 
			<h2 className='hidden'> Copyright notice. </h2>
			<p> © Code by Sindagal OpenSource 2022! License: MIT </p>
		</footer>
	</React.StrictMode>
</>

export default App;


//todo dynamically contrasting border colour for focused items
