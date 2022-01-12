import '../style/navigation.css';
import HeaderNavBarProps from '../type/headerNavBarProps';

const HeaderNavBar: (props: HeaderNavBarProps) => JSX.Element = (props) => <header>
    <nav className="nav-container">
        <label className="menu-icon" htmlFor="menu-btn"> <span className="navicon"/> </label>
        <button className="nav-logo-button" id="menu-btn" onClick={ () => window.scrollTo(0,0) }> { props.logoText }</button>
        <ul className="menu">
            {props.navigationLinks.map(sectionKey => 
                <a key={sectionKey} href={ `#${sectionKey}`}> {sectionKey.toUpperCase()} </a>
            )}
        </ul>
    </nav>
    <hr/>
</header>

export default HeaderNavBar;