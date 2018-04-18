"use strict";
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
import _init from "./init";
export { _init as initJssdk };
import _wxShareAppMessage from "./wxShareAppMessage";
export { _wxShareAppMessage as wxShareAppMessage };
import _wxShareTimeline from "./wxShareTimeline";
export { _wxShareTimeline as wxShareTimeline };
