export interface IWin extends Window {
    wx: {
        config: any;
        ready: any;
        error: any;
        onMenuShareAppMessage: any;
        onMenuShareTimeline: any;
    };
}

export interface ISignData {
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
}