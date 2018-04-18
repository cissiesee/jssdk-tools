## 使用指南
### 安装
    npm install lk-wxjssdk --save-dev
### 使用
    import { initJssdk, wxShareAppMessage, wxShareTimeline } from "lk-wxjssdk";
    initJssdk(<signUrl>, {
        // 微信js api列表, 默认为["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]
        jsApiList: string[];
        // 是否调试模式，默认关闭
        debug: boolean;
        // 获得签名请求所需数据
        data: any;
    })
    .then(()=>{
        wxShareAppMessage({
            title: string; // 分享标题
            link?: string; // 分享路径
            desc: string; // 分享描述
            imgUrl: string; // 分享图标
        });
        wxShareTimeline({
            title: string; // 分享标题
            link?: string; // 分享路径
            imgUrl: string; // 分享图标
        });
    })
    .catch((error)=>{
    });
## 开发指南
### 安装依赖包
    npm install
### 开发
    npm run dev
### 编译
    npm run es5
### 打包
    npm run build
### 测试
    npm run test
### 持续测试
    npm run test:watch

## 版本说明
### 1.0.0
1. 第一次发布，仅包含jssdk的自定义分享

### 1.0.1
1. 删除log

### 1.0.2
1. 切换使用axios