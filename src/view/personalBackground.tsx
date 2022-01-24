import '../style/personalBackground.scss';
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
        <dl className={`personal-background__section ${getSectionCssModifier(sectionIndex)}`} id={sectionName}>
            <dt><h3 className="data-tag__text">{sectionName.toUpperCase()}</h3></dt>
            <section className='section__data-group'>
                {sectionDetails.map((detail: Detail) => <_ key={`${sectionName}${detail.title?.text ?? ""}`}>
                    <dd className="data-group__data-definition" role="definition">
                        <HTMLTag as={getDetailTag(sectionName)} role="listitem">
                            <fieldset className="data-definition__fieldset">
                                <address tabIndex={0}  role="link">
                                    <a tabIndex={-1} href={detail.url ?? `#${sectionName}`} target={detail.url ? "_blank" : "_self"} rel="noopener noreferrer"> 
                                        <figure className="anchor__figure">
                                            <picture>
                                                <img className="picture__image picture__image--zoom" src={detail.image.src} alt={detail.image.alt} title={detail.title?.definition ?? detail.image.title}/>
                                            </picture> 
                                            {detail.image.caption && 
                                                <figcaption className={`anchor__figure-caption ${getDetailFigureCaptionCssModifier(sectionIndex)}`}> 
                                                    <strong>{detail.image.caption}</strong>
                                                </figcaption>
                                            }
                                        </figure>
                                    </a>
                                </address>
                                {detail.title && <>
                                    <details open={true}>
                                        <summary className='details__summary' tabIndex={0}>
                                            <dfn title={detail.title.definition}>{detail.title.text}</dfn> 
                                        </summary>
                                        <p className='details__chronology'>
                                            <dfn title={`${detail.title.text} ${Util.Capitalize(sectionName)} date`}>{detail.dateRange}</dfn>
                                        </p>
                                        <p className='details__description'>
                                            <Text description={detail.description} cssClass={"description__text"}/>
                                        </p>
                                    </details>
                                </>}
                            </fieldset>
                        </HTMLTag>
                    </dd>
                </_>)}
            </section>
        </dl>
    </_>)}
</>

const getDetailTag: (sectionKey: string) => ElementType = (sectionKey) => (["resume", "hobbies"].includes(sectionKey) ? "aside" : "article");
const getDetailFigureCaptionCssModifier: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 
    ? "anchor__figure-caption--dark-overlay anchor__figure-caption--light-text" 
    : "anchor__figure-caption--light-overlay anchor__figure-caption--dark-text";
const getSectionCssModifier: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "personal-background__section--light-background" : "personal-background__section--dark-background";

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);

