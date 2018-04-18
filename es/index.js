"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 * import { initJssdk, wxShareAppMessage, wxShareTimeline } from "lk-wxjssdk";
 * initJssdk(<signUrl>, opts: {
 *   // 微信js api列表, 默认为["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]
 *   jsApiList: string[];
 *   // 是否调试模式，默认关闭
 *   debug: boolean;
 *   // 获得签名请求所需数据
 *   data: any;
 * })
 *   .then(()=>{
 *     wxShareAppMessage({
 *       title: string; // 分享标题
 *       link?: string; // 分享路径
 *       desc: string; // 分享描述
 *       imgUrl: string; // 分享图标
 *     });
 *     wxShareTimeline({
 *       title: string; // 分享标题
 *       link?: string; // 分享路径
 *       imgUrl: string; // 分享图标
 *     });
 *   })
 *   .catch((error)=>{
 *   });
 */
var init_1 = require("./init");
exports.initJssdk = init_1.default;
var wxShareAppMessage_1 = require("./wxShareAppMessage");
exports.wxShareAppMessage = wxShareAppMessage_1.default;
var wxShareTimeline_1 = require("./wxShareTimeline");
exports.wxShareTimeline = wxShareTimeline_1.default;
//# sourceMappingURL=index.js.map