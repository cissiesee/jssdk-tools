"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 微信好友分享
 * @param {object} obj {title:分享标题, link:分享路径, desc:分享描述, imgUrl:分享图标}
 * @return {undefined}
 */
function wxShareAppMessage(obj) {
    var wx = window.wx;
    wx.onMenuShareAppMessage({
        title: obj.title,
        desc: obj.desc,
        link: obj.link,
        imgUrl: obj.imgUrl,
        success: function () {
            // 用户确认分享后执行的回调函数
            // alert("分享成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            // alert("分享取消");
        }
    });
}
exports.default = wxShareAppMessage;
//# sourceMappingURL=wxShareAppMessage.js.map