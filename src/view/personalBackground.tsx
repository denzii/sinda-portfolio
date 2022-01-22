import '../style/personalBackground.css';
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
        <dl id={sectionName} className={`section ${getSectionStyleClass(sectionIndex)}`}>
            <dt> <h3>{sectionName.toUpperCase()}</h3></dt>
            <div className='data-group'>
                {sectionDetails.map((detail: Detail) => <_ key={`${sectionName}${detail.title?.text ?? ""}`}>
                    <dd role="definition">
                        <HTMLTag as={getDetailTag(sectionName)} role="listitem">
                            <fieldset>
                                <address role="link">
                                    <a href={detail.url ?? `#${sectionName}`} target={detail.url ? "_blank" : "_self"} rel="noopener noreferrer"> 
                                        <figure>
                                            <picture className="image-container">
                                                <img className="detail-image zoom" src={detail.image.src} alt={detail.image.alt} title={detail.title?.definition ?? detail.image.title}/*className="bigger-icon"*//>
                                            </picture> 
                                            {detail.image.caption && 
                                                <figcaption className={getDetailFigureCaptionStyleClass(sectionIndex)}> 
                                                    <strong>{detail.image.caption}</strong>
                                                </figcaption>
                                            }
                                        </figure>
                                    </a>
                                </address>
                                {detail.title && <>
                                    <details open={true}>
                                        <summary tabIndex={0}><dfn title={detail.title.definition}> {detail.title.text}</dfn> </summary>
                                        <p><dfn title={`${detail.title.text} ${Util.Capitalize(sectionName)} date`}>{detail.dateRange}</dfn></p>
                                        <p> <Text description={detail.description}/> </p>
                                    </details>
                                </>}
                            </fieldset>
                        </HTMLTag>
                    </dd>
                </_>)}
            </div>
        </dl>
    </_>)}
</>

const getDetailTag: (sectionKey: string) => ElementType = (sectionKey) => (["resume", "hobbies"].includes(sectionKey) ? "aside" : "article");
const getDetailFigureCaptionStyleClass: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "dark-overlay light-text" : "light-overlay dark-text";
const getSectionStyleClass: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "light-background" : "dark-background";


const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);

