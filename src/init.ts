import { getWxSignService } from "./getWxSignService";
import { IWin, ISignData } from "./interface";

interface IOpts {
    jsApiList: string[];
    debug?: boolean; // 是否调试模式
    data?: any; // 获得签名请求所需数据
}

export default function init(signUrl: string, opts: IOpts) {
    const wx = (window as IWin).wx;
    return new Promise((resolve, reject) => {
        getWxSignService({ url: signUrl, data: opts.data })
            .then((res: any) => {
                const data = res.data;
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
                wx.ready(() => {
                    resolve();
                });
                wx.error((err: any) => {
                    console.log(err);
                });
            })
            .catch((error: any) => {
                reject(error);
            });
    });
}
