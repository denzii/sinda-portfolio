// import '../style/supplementary.css';
import Detail from '../model/detail';
import Background from '../interface/background';
import { ElementType } from 'react';
import HTMLTag from '../model/view/htmlTag';
import AppContext from '../type/context';
import { connect, ComponentConstructor }  from '../model/view/context';
import _ from '../model/view/keyableFragment';
import Text from '../model/view/text';
import Util from '../util';

type PersonalBackgroundProps =  { background: Background };

type ContextReducer =  (context: AppContext) => PersonalBackgroundProps;
const Data: ContextReducer = (context: AppContext) => ({
        background: context.owner.background,
});

const PersonalBackground: (props: PersonalBackgroundProps) => JSX.Element  = (props) => <>
    {Object.entries(props.background).map(([sectionName, sectionDetails]: [string, Detail[]], sectionIndex) => <_ key={sectionName}>
        <dl id={sectionName}/*className={getSectionStyleClass()}*/>
            <dt /*className="unit-header"*/>{sectionName.toUpperCase()} </dt>
            {sectionDetails.map((detail: Detail) => <_ key={`${sectionName}${detail.title?.text ?? ""}`}>
                <dd role="definition" /*className="unit-container"*/>
                    <HTMLTag as={getDetailTag(sectionName)} role="listitem" /*className="unit"*/>
                        <fieldset>
                            <address role='link'>
                                <a href={detail.url ?? `#${sectionName}`} /*target={detail.url ? "_blank" : "_self"} rel="noopener noreferrer"*/> 
                                    <figure> 
                                        <img src={detail.image.src} alt={detail.image.alt} title={detail.image.title}/*className="bigger-icon"*//>
                                        {detail.image.caption && 
                                            <figcaption /*className={getDetailFigureCaptionStyleClass()}*/> 
                                                <strong>{detail.image.caption}</strong>
                                            </figcaption>
                                        }
                                    </figure>
                                </a>
                            </address>
                            {detail.title &&                 
                                <details open={true}>
                                    <summary tabIndex={0} /*className="lead"*/> <dfn title={detail.title.definition}> {detail.title.text} </dfn> </summary>
                                    <small> <dfn title={`${Util.Capitalize(sectionName)} date`}> {detail.dateRange} </dfn></small>
                                    <p /*className="lead"*/> <Text description={detail.description}/> </p>
                                </details>
                            }
                        </fieldset>
                    </HTMLTag>
                </dd>
            </_>)}
        </dl>
    </_>)}
</>

const getDetailTag: (sectionKey: string) => ElementType = (sectionKey) => (["resume", "hobbies"].includes(sectionKey) ? "aside" : "article");
const getDetailFigureCaptionStyleClass: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "dark-overlay light-text" : "light-overlay dark-text";
const getSectionStyleClass: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "light-background container-fluid" : "dark-background container-fluid";


const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);

