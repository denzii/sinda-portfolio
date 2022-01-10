import '../style/navigation.css';
import Data from '../data';
import HeaderNavBarProps from '../type/headerNavBarProps';

const HeaderNavBar = (props: HeaderNavBarProps) => <>
    <div className="nav-container">
        <nav>
            <button className="nav-header" onClick={ () => window.scrollTo(0,0) }> { props.logoText }</button>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <ul className="menu"> 
                {Data.NavigationSections().map(section => 
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