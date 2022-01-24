import '../style/socialMedia.scss';
import PersonalURLs from '../interface/personalUrls';
import ExternalNavigationProps from '../type/externalNavigationProps';
import { connect, ComponentConstructor }  from '../model/view/context';
import AppContext from '../type/context';
import Util from '../util';
import _ from '../model/view/keyableFragment';

type SocialMediaSectionProps =  { urls: PersonalURLs };

type ContextReducer =  (context: AppContext) => SocialMediaSectionProps;
const Data: ContextReducer = (context: AppContext) => ({
        urls: context.owner.urls,
});

const SocialMedia: (props: SocialMediaSectionProps) => JSX.Element  = (props) => <>
    {Object.entries(props.urls).map(([targetPlatformName, navigationProps]: [string, ExternalNavigationProps]) => <_ key={targetPlatformName}>
        <address className="social-media__external-address" >
                <a href={getTargetPlatformHref(targetPlatformName, navigationProps.url)} target={"_blank"} rel="noopener noreferrer" title={`My ${Util.Capitalize(targetPlatformName)}`} aria-label={`My ${targetPlatformName} URL`} > 
                    <navigationProps.icon className="anchor__icon anchor__icon--white"/> 
                </a>
        </address>
    </_>)}
</>

const getTargetPlatformHref: (targetPlatformName: string, navigationUrl: string) => string = (targetPlatformName, navigationUrl) => targetPlatformName === "email" ? `mailto: ${navigationUrl}` : navigationUrl;

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(SocialMedia);



