// import '../style/navigation.css';
import { connect, ComponentConstructor }  from '../model/view/context';
import Context from '../type/context';
import _ from '../model/view/keyableFragment';

type HeaderNavProps =  { logoText: string; navigationLinks: string[]; };

type ContextReducer =  (context: Context) => HeaderNavProps;
const Data: ContextReducer = (context: Context) => ({
    logoText: context.owner.ToString({ detailed: false }),
    navigationLinks: Object.keys(context.owner.background)
});

const Nav: (props: HeaderNavProps) => JSX.Element = (props) => <>
    <label /*className="menu-icon"*/ htmlFor="menu-btn"> <span /*className="navicon"*//> </label>
    <a tabIndex={0} href="/#"/* className="nav-logo-button" id="menu-btn"*/  title='Scroll to Top'> { props.logoText }</a>
    <ul /*className="menu"*/>
        {props.navigationLinks.map(sectionKey => <_ key={sectionKey}>
            <a tabIndex={0} href={ `/#${sectionKey}`}  title={`Scroll to ${sectionKey} section`}> {sectionKey.toUpperCase()} </a>
        </_>)}
    </ul>
</>

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(Nav);