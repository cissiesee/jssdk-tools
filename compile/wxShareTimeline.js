"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 微信朋友圈分享
 * @param {object} obj {title:分享标题, link:分享路径, imgUrl:分享图标}
 * @return {undefined}
 */
function wxShareTimeline(obj) {
    var wx = window.wx;
    wx.onMenuShareTimeline({
        title: obj.title,
        link: obj.link,
        imgUrl: obj.imgUrl,
        success: function () {
            // 用户确认分享后执行的回调函数
            // alert("分享到朋友圈成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            // alert("你没有分享到朋友圈");
        }
    });
}
exports.default = wxShareTimeline;
//# sourceMappingURL=wxShareTimeline.js.map