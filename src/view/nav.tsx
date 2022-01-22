import { connect, ComponentConstructor }  from '../model/view/context';
import Context from '../type/context';
import _ from '../model/view/keyableFragment';
import { CgMenuRound as MobileMenuOpenedIcon } from "react-icons/cg";
import { CgCloseO as MobileMenuClosedIcon } from "react-icons/cg";
import { motion } from "framer-motion";
import React, { useState } from "react";

type HeaderNavProps =  { logoText: string; navigationLinks: string[]; };

type ContextReducer =  (context: Context) => HeaderNavProps;
const Data: ContextReducer = (context: Context) => ({
    logoText: context.owner.ToString({ detailed: false }),
    navigationLinks: Object.keys(context.owner.background)
});


const Nav: (props: HeaderNavProps) => JSX.Element = (props) => {
    const [isMobileMenuOpen, setMobileMenuState] = useState(false);
    
    type EnterKeyEvent = (e: React.KeyboardEvent) => void | (() => void);
    const onEnterKey: EnterKeyEvent = (e: React.KeyboardEvent) => e.key === "Enter" ? setMobileMenuState(!isMobileMenuOpen) : () => {};
    const onAnchorNavigation: () => void = () => setMobileMenuState(false);
    
    const MobileMenuButton: () => JSX.Element = isMobileMenuOpen ? () => <>
            <button id="mobile-menu-button" autoFocus onClick={() => setMobileMenuState(!isMobileMenuOpen)} onKeyPress={onEnterKey} aria-expanded={isMobileMenuOpen}>
                <MobileMenuClosedIcon/>
            </button>
        </> : () => <>
            <button id="mobile-menu-button" autoFocus onClick={() => setMobileMenuState(!isMobileMenuOpen)} onKeyPress={onEnterKey} aria-expanded={isMobileMenuOpen}>
                <MobileMenuOpenedIcon/>
            </button>
        </>;
    
    return <>
        <h3><a tabIndex={0} href="/#" id="nav-logo-text" title='Scroll to Top'> { props.logoText }</a></h3>
        <nav id="desktop-nav">
            <menu >
                {props.navigationLinks.map(sectionKey => <_ key={`desktop-${sectionKey}`}>
                    <li className="nav-element"><h4> <a href={ `/#${sectionKey}`} title={`Scroll to ${sectionKey} section`}> {sectionKey} </a> </h4></li>
                </_>)}
            </menu>
        </nav>
        <nav id="mobile-nav" aria-labelledby="mobile-nav-label">
            <label htmlFor="mobile-menu-button" className='hidden' id="mobile-nav-label" aria-label="Mobile Navigation Menu Toggle">Navigation Menu toggle used for mobile size screen resolutions</label>
            <MobileMenuButton />
            <menu>
                {isMobileMenuOpen && props.navigationLinks.map(sectionKey => <_ key={`mobile-${sectionKey}`}>
                    <motion.li className="nav-element" onClick={onAnchorNavigation} initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.04}}>
                        <h4> <a href={ `/#${sectionKey}`} title={`Scroll to ${sectionKey} section`}> {sectionKey}</a></h4>
                    </motion.li>
                </_>)}
            </menu>
        </nav>
    </>
}

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(Nav);

