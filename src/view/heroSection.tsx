import "../style/header.css";
import HeroSectionProps from "../type/heroSectionProps";

const HeroSection: (props: HeroSectionProps) => JSX.Element = (props) => <>
    <header className={`header-image-container ${props.container.backgroundImageClass}`}>
        <img srcSet={`${props.image.src} 0.60x`}  alt={props.image.alt} className="header-image" />
    </header>
</>

export default HeroSection;