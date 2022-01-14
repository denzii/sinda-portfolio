import '../style/navigation.css';
import { connect, ComponentConstructor }  from '../model/view/context';
import Context from '../type/context';

type HeaderNavProps =  { logoText: string; navigationLinks: string[]; };

type ContextReducer =  (context: Context) => HeaderNavProps;
const Data: ContextReducer = (context: Context) => ({
    logoText: context.owner.ToString({ detailed: false }),
    navigationLinks: Object.keys(context.owner.background)
});

const Nav: (props: HeaderNavProps) => JSX.Element = (props) => <>
    <label className="menu-icon" htmlFor="menu-btn"> <span className="navicon"/> </label>
    <button className="nav-logo-button" id="menu-btn" onClick={ () => window.scrollTo(0,0) }> { props.logoText }</button>
    <ul className="menu">
        {props.navigationLinks.map(sectionKey => 
            <a key={sectionKey} href={ `#${sectionKey}`}> {sectionKey.toUpperCase()} </a>
        )}
    </ul>
</>

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(Nav);

