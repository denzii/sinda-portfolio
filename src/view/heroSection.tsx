import "../style/header.css";
import ImageProps from "../type/imageProps";

const HeroSection = (props: ImageProps) => <>
    <header className="header-image-container">
        <img src={props.src} alt={props.alt} className="header-image" />
    </header>
</>

export default HeroSection;