import ReactDOM from 'react-dom';
import Data from './data';
import App from './view/app';

import ReactDOMServer from 'react-dom/server';
// for inspecting the raw html output generated from JSX
// console.log(ReactDOMServer.renderToString(App(Data.PersonalBrand())));

const JSX = App(Data.PersonalBrand());
ReactDOM.render(JSX, document.getElementById('root'));
