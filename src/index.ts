import ReactDOM from 'react-dom';
import App from './view/app';
import ReactDOMServer from 'react-dom/server';

// for testing purposes
console.log(ReactDOMServer.renderToString(App()));

ReactDOM.render(App(), document.getElementById('root'));
