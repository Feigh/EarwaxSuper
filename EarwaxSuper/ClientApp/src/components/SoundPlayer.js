"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundPlayer = void 0;
var React = require("react");
var SoundPlayer = /** @class */ (function (_super) {
    __extends(SoundPlayer, _super);
    function SoundPlayer(props) {
        return _super.call(this, props) || this;
    }
    SoundPlayer.prototype.componentDidMount = function () {
    };
    // Notering är att på grund av säkerhet stuff så låter chrome och etc inte en att autospela ljud
    // Lösningen är att köra PWA och installera den på windows datorn
    SoundPlayer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("img", { src: "http://localhost/earwaxmedia/dog.jpg" }),
            React.createElement("audio", { id: "audioId", autoPlay: true },
                React.createElement("source", { src: "http://localhost/earwaxmedia/prezofbank.mp3", type: "audio/mp3" }))));
    };
    return SoundPlayer;
}(React.PureComponent));
exports.SoundPlayer = SoundPlayer;
exports.default = SoundPlayer;
//# sourceMappingURL=SoundPlayer.js.map