"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getWxSignService_1 = require("./getWxSignService");
function init(signUrl, opts) {
    var wx = window.wx;
    return new Promise(function (resolve, reject) {
        getWxSignService_1.getWxSignService({ url: signUrl, data: opts.data })
            .then(function (res) {
            var data = res.data;
            wx.config({
                debug: opts.debug === undefined ? false : opts.debug,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: opts.jsApiList || [
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareWeibo"
                ]
            });
            wx.ready(function () {
                resolve();
            });
            wx.error(function (err) {
                console.log(err);
            });
        })
            .catch(function (error) {
            reject(error);
        });
    });
}
exports.default = init;
//# sourceMappingURL=init.js.map