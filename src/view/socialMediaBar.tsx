import '../style/social.css';
import PersonalURLs from '../interface/personalUrls';
import ExternalNavigationProps from '../type/externalNavigationProps';

const SocialMediaBar: (props: {urls: PersonalURLs}) => JSX.Element  = (props) => <section>
    {Object.entries(props.urls).map(([targetName, navigationProps]: [string, ExternalNavigationProps]) => 
        <address className="fa-container" key={targetName}>
            <a href={targetName === "email" ? `mailto: ${navigationProps.url}` : navigationProps.url} aria-label={`${targetName} Profile`} className='fa'> 
                <navigationProps.icon/> 
            </a>
        </address>
    )}
    <hr/>
</section>

export default SocialMediaBar;