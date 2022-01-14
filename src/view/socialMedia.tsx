import '../style/social.css';
import PersonalURLs from '../interface/personalUrls';
import ExternalNavigationProps from '../type/externalNavigationProps';
import { connect, ComponentConstructor }  from '../model/view/context';
import AppContext from '../type/context';

type SocialMediaSectionProps =  { urls: PersonalURLs };

type ContextReducer =  (context: AppContext) => SocialMediaSectionProps;
const Data: ContextReducer = (context: AppContext) => ({
        urls: context.owner.urls,
});

const SocialMedia: (props: SocialMediaSectionProps) => JSX.Element  = (props) => <>
    {Object.entries(props.urls).map(([targetName, navigationProps]: [string, ExternalNavigationProps]) => 
        <address className="fa-container" key={targetName}>
            <a href={targetName === "email" ? `mailto: ${navigationProps.url}` : navigationProps.url} aria-label={`${targetName} Profile`} className='fa'> 
                <navigationProps.icon/> 
            </a>
        </address>
    )}
</>

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(SocialMedia);