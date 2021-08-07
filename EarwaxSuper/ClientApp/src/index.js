"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.css");
var React = require("react");
var ReactDOM = require("react-dom");
var react_ui_1 = require("@windmill/react-ui");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, { basename: baseUrl },
    React.createElement(react_ui_1.Windmill, null,
        React.createElement(App_1.default, null))), rootElement);
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map