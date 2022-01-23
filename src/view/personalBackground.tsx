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
            <dt className="personal-background__section__data-tag">
                <h3 className="personal-background__section__data-tag__text">{sectionName.toUpperCase()}</h3>
            </dt>
            <section className='personal-background__section__data-group'>
                {sectionDetails.map((detail: Detail) => <_ key={`${sectionName}${detail.title?.text ?? ""}`}>
                    <dd className="personal-background__section__data-group__data-definition" role="definition">
                        <HTMLTag as={getDetailTag(sectionName)} role="listitem">
                            <fieldset className="personal-background__section__data-group__data-definition__fieldset">
                                <address className="personal-background__section__data-group__data-definition__fieldset__address" role="link">
                                    <a className="personal-background__section__data-group__data-definition__fieldset__address__anchor" href={detail.url ?? `#${sectionName}`} target={detail.url ? "_blank" : "_self"} 
                                        rel="noopener noreferrer"> 
                                        <figure className="personal-background__section__data-group__data-definition__fieldset__address__anchor__figure">
                                            <picture className="personal-background__section__data-group__data-definition__fieldset__address__anchor__figure__picture">
                                                <img className="personal-background__section__data-group__data-definition__fieldset__address__anchor__figure__picture__image personal-background__section__data-group__data-definition__fieldset__address__anchor__figure__picture__image--zoom"
                                                     src={detail.image.src} alt={detail.image.alt} title={detail.title?.definition ?? detail.image.title}/>
                                            </picture> 
                                            {detail.image.caption && 
                                                <figcaption className={`personal-background__section__data-group__data-definition__fieldset__address__anchor__figure-caption ${getDetailFigureCaptionCssModifier(sectionIndex)}`}> 
                                                    <strong>{detail.image.caption}</strong>
                                                </figcaption>
                                            }
                                        </figure>
                                    </a>
                                </address>
                                {detail.title && <>
                                    <details className='personal-background__section__data-group__data-definition__fieldset__details' open={true}>
                                        <summary className='personal-background__section__data-group__data-definition__fieldset__details__summary' tabIndex={0}>
                                            <dfn title={detail.title.definition}>{detail.title.text}</dfn> 
                                        </summary>
                                        <p className='personal-background__section__data-group__data-definition__fieldset__details__chronology'>
                                            <dfn title={`${detail.title.text} ${Util.Capitalize(sectionName)} date`}>{detail.dateRange}</dfn>
                                        </p>
                                        <p className='personal-background__section__data-group__data-definition__fieldset__details__description'>
                                            <Text description={detail.description} cssClass={"personal-background__section__data-definition__fieldset__details__description__text"}/>
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
    ? "personal-background__section__data-group__data-definition__fieldset__address__anchor__figure-caption--dark-overlay personal-background__section__data-group__data-definition__fieldset__address__anchor__figure-caption--light-text" 
    : "personal-background__section__data-group__data-definition__fieldset__address__anchor__figure-caption--light-overlay personal-background__section__data-group__data-definition__fieldset__address__anchor__figure-caption--dark-text";
const getSectionCssModifier: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "personal-background__section--light-background" : "personal-background__section--dark-background";

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);

