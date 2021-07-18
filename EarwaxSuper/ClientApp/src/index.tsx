import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl : string = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement : any = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

