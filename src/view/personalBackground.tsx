import '../style/supplementary.css';
import Detail from '../model/detail';
import Background from '../interface/background';
import { ElementType } from 'react';
import HTMLTag from '../model/view/htmlTag';
import AppContext from '../type/context';
import { connect, ComponentConstructor }  from '../model/view/context';

type PersonalBackgroundProps =  { background: Background };

type ContextReducer =  (context: AppContext) => PersonalBackgroundProps;
const Data: ContextReducer = (context: AppContext) => ({
        background: context.owner.background,
});

const PersonalBackground: (props: PersonalBackgroundProps) => JSX.Element  = (props) => <>
    {Object.entries(props.background).map(([sectionKey, sectionDetails]: [string, Detail[]], backgroundIndex) => 
        <dl className={backgroundIndex % 2 === 0 ? "light-background container-fluid" : "dark-background container-fluid"} key={sectionKey}>
            <dt className="unit-header">{sectionKey.toUpperCase()} </dt>
            {sectionDetails.map((detail: Detail) => 
                <dd role="definition" className="unit-container" key={`${sectionKey}-${detail.title?.text}`}>
                    <HTMLTag as={getDetailTag(sectionKey)} className="unit" role="listitem">
                        <fieldset>
                            <address role='link'>
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
</>

const getDetailTag: (sectionKey: string) => ElementType = (sectionKey) => (["resume", "hobbies"].includes(sectionKey) ? "aside" : "article");

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);