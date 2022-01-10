import HeaderNavBar from './headerNavBar';
import SocialMediaBar from './socialMediaBar';
import PersonalBackgroundSection from './personalBackgroundSection';
import Data from '../data';
import ProjectOwner from '../model/projectOwner';
import HeroSection from './heroSection';

const App = () => {
	const projectOwner: ProjectOwner = Data.ProjectOwner();
	const ownerDisplayName: string = projectOwner.ToString({ detailed: false });

	return <>
		<HeaderNavBar logoText={ownerDisplayName} />
    	<HeroSection alt={projectOwner.image.alt} src={projectOwner.image.src}/>
    	<SocialMediaBar />
		<PersonalBackgroundSection background={projectOwner.background} />
	</>
}

export default App;
