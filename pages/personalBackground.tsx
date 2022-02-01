import Detail from '../model/detail';
import Background from '../interface/background';
import { ElementType } from 'react';
import HTMLTag from '../model/view/htmlTag';
import AppContext from '../type/context';
import { connect, ComponentConstructor }  from '../model/view/context';
import _ from '../model/view/keyableFragment';
import Text from '../model/view/text';
import Util from '../util';
import FieldsetFigure from '../model/view/fieldsetFigure';

type PersonalBackgroundProps =  { background: Background };

type ContextReducer =  (context: AppContext) => PersonalBackgroundProps;
const Data: ContextReducer = (context: AppContext) => ({
        background: context.owner.background,
});

const PersonalBackground: (props: PersonalBackgroundProps) => JSX.Element  = (props) => <>
    {Object.entries(props.background).map(([sectionName, sectionDetails]: [string, Detail[]], sectionIndex) => <_ key={sectionName}>
        <dl role="article" className={`personal-background__section ${getSectionCssModifier(sectionIndex)}`} tabIndex={0}  aria-busy="false" id={sectionName}>
            <dt><h3 className="data-tag__text">{sectionName.toUpperCase()}</h3></dt>
            <div role="presentation" className='section__data-group'>
                {sectionDetails.map((detail: Detail, articleIndex: number) => <_ key={`${sectionName}${detail.title?.text ?? ""}`}>
                    <dd className="data-group__data-definition" role="definition">
                        <HTMLTag as={getDetailTag(sectionName)}>
                            <fieldset className="data-definition__fieldset">
                                <FieldsetFigure {...{ detail, sectionIndex, sectionName}}/>
                                {detail.title && <>
                                    <details open={true}>
                                        <summary className='details__summary' id={`details__summary${sectionIndex}${articleIndex}`} tabIndex={0}>
                                            <dfn title={String(detail.title.definition)}>{detail.title.text}</dfn> 
                                        </summary>
                                        <p className='details__chronology'>
                                            <dfn title={`${detail.title.text} ${Util.Capitalize(sectionName)} date`}>{detail.dateRange}</dfn>
                                        </p>
                                        <p className='details__description'>
                                            <Text description={detail.description} cssClass={"description__text"}/>
                                        </p>
                                        <p className='details__meta'>
                                            <Text description={detail.metadata} cssClass={"meta__text"}/>
                                        </p>
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
const getSectionCssModifier: (sectionIndex: number) => string = (sectionIndex) => sectionIndex % 2 === 0 ? "personal-background__section--light-background" : "personal-background__section--dark-background";

const WithContextConsumer: ComponentConstructor = connect(Data);
export default WithContextConsumer(PersonalBackground);

