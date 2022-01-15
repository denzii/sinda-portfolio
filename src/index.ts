import ReactDOM from 'react-dom';
import Data from './data';
import App from './view/app';

//// for inspecting the raw html output generated from JSX
// import ReactDOMServer from 'react-dom/server';
// console.log(ReactDOMServer.renderToString(App(Data.PersonalBrand())));

const JSX = App(Data.PersonalBrand());
ReactDOM.render(JSX, document.getElementById('root'));
