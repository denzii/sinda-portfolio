import BackgroundDetail from '../model/backgroundDetail';
import PersonalBackground from '../interface/personalBackground';
import '../style/supplementary.css';

const PersonalBackgroundSection = (props: {background: PersonalBackground}) => <>
    {Object.entries(props.background).map(([sectionKey, sectionDetails], index) => 
        <div className={index % 2 === 0 ? "light-background container-fluid" : "dark-background container-fluid"} id={sectionKey} key={sectionKey}>
                <p className="unit-header">{sectionKey.toUpperCase()} </p>
                {(sectionDetails as BackgroundDetail[]).map((detail) => 
                    <div className="unit-container" key={`${sectionKey}-${detail.title}`}>
                        <div className="unit">
                            <a href={detail.url} target="_blank" rel="noopener noreferrer"> 
                                <span className="info-image-container"> <img src={detail.image.src} alt={detail.image.alt} className="bigger-icon"/> </span>
                            </a>
                            <h3 className="lead">{detail.title}<br/> <small> {detail.dateRange} </small> </h3>
                            <p className="lead">{detail.description}</p>
                        </div>
                    </div>
                )}
        </div>
    )};
</>

export default PersonalBackgroundSection;