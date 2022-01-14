import ReactDOM from 'react-dom';
import Data from './data';
import App from './view/app';

import ReactDOMServer from 'react-dom/server';

// for testing purposes
console.log(ReactDOMServer.renderToString(App(Data.PersonalBrand())));


ReactDOM.render(App(Data.PersonalBrand()), document.getElementById('root'));
