import HeaderNavBar from './headerNavBar';
import SocialMediaBar from './socialMediaBar';
import PersonalBackgroundSection from './personalBackgroundSection';
import Data from '../data';
import ProjectOwner from '../model/projectOwner';
import HeroSection from './heroSection';
import PersonalBackground from '../interface/personalBackground';
import HeroSectionProps from '../type/heroSectionProps';

const App = () => {
	const owner: ProjectOwner = Data.ProjectOwner();
	const ownerDisplayName: string = owner.ToString({ detailed: false });
	const background: PersonalBackground = owner.background;
	const heroProps: HeroSectionProps = Data.HeroSectionProps();
	
	return <>
		<HeaderNavBar logoText={ownerDisplayName} navigationLinks={Object.keys(background)}/>
    	<HeroSection  image={heroProps.image} container={heroProps.container}/>
    	<SocialMediaBar urls={owner.urls}/>
		<PersonalBackgroundSection background={background} />
	</>
}

export default App;
