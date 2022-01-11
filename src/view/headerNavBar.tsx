import '../style/navigation.css';
import HeaderNavBarProps from '../type/headerNavBarProps';

const HeaderNavBar = (props: HeaderNavBarProps) => <>
    <div className="nav-container">
        <nav>
            <button className="nav-logo-button" id="menu-btn" onClick={ () => window.scrollTo(0,0) }> { props.logoText }</button>
            <ul className="menu"> 
                {props.navigationLinks.map(section => 
                    <li key={section}>
                        <a href={ "#" + section}> {section.toUpperCase()} </a>
                    </li>
                )}
            </ul>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        </nav>
    </div>
</>

export default HeaderNavBar;