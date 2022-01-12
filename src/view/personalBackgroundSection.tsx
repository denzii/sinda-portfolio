import '../style/supplementary.css';
import BackgroundDetail from '../model/backgroundDetail';
import PersonalBackground from '../interface/personalBackground';
import { ElementType } from 'react';
import HTMLTag from '../model/view/htmlTag';

const PersonalBackgroundSection: (props: {background: PersonalBackground}) => JSX.Element  = (props) => <section>
    {Object.entries(props.background).map(([sectionKey, sectionDetails]: [string, BackgroundDetail[]], backgroundIndex) => 
        <dl className={backgroundIndex % 2 === 0 ? "light-background container-fluid" : "dark-background container-fluid"} key={sectionKey}>
            <dt className="unit-header">{sectionKey.toUpperCase()} </dt>
            {sectionDetails.map((detail: BackgroundDetail) => 
                <dd className="unit-container" key={`${sectionKey}-${detail.title?.text}`}>
                    <HTMLTag as={getDetailTag(sectionKey)} className="unit">
                        <fieldset>
                            <address>
                                <a href={detail.url ?? `#${sectionKey}`} target={detail.url ? "_blank" : "_self"} rel="noopener noreferrer"> 
                                    <figure> 
                                        <img src={detail.image.src} alt={detail.image.alt} className="bigger-icon"/>
                                        {detail.image.caption && 
                                            <figcaption className={backgroundIndex % 2 === 0 ? "dark-overlay light-text" : "light-overlay dark-text"}> 
                                                <strong>{detail.image.caption}</strong>
                                            </figcaption>
                                        }
                                    </figure>
                                </a>
                            </address>
                            {detail.title &&                 
                                <details open={true}>
                                    <summary className="lead"> <dfn title={detail.title.definition}> {detail.title.text} </dfn> </summary>
                                    <small> {detail.dateRange} </small>
                                    <p className="lead"> {detail.description} </p>
                                </details>
                            }
                        </fieldset>
                    </HTMLTag>
                </dd>
            )}
            <hr/>
        </dl>
    )}
    <hr/>
</section>

const getDetailTag: (sectionKey: string) => ElementType = (sectionKey) => (["resume", "hobbies"].includes(sectionKey) ? "aside" : "article");

export default PersonalBackgroundSection;