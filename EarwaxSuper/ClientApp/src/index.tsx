import 'bootstrap/dist/css/bootstrap.css';
import * as React from "react"
import * as ReactDOM from 'react-dom';
import { Windmill } from '@windmill/react-ui'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl : any = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement : any = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
        <Windmill>
            <App />
        </Windmill>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

