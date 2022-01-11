import '../style/social.css';
import PersonalURLs from '../interface/personalUrls';
import ExternalNavigationProps from '../type/externalNavigationProps';

const SocialMediaBar = (props: {urls: PersonalURLs}) => <>
    {Object.entries(props.urls).map(([siteName, navigationProps]: [string, ExternalNavigationProps]) => 
        <div className="fa-container" key={siteName}>
            <a href={navigationProps.url} aria-label={`${siteName} Profile`} className='fa'> {<navigationProps.icon/>} </a>
        </div>
    )}
</>

export default SocialMediaBar;