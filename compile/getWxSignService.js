"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
/**
 * @param data datadesc
 * @return {Promise<>} {
 *  ...
 * }
 */
function getWxSignService(obj) {
    // const requestOption = {
    //     type: "post",
    //     dataType: "json",
    //     contentType: "application/json",
    //     data: obj.data
    // };
    return axios_1.default({
        method: "post",
        url: obj.url,
        data: obj.data
    });
}
exports.getWxSignService = getWxSignService;
//# sourceMappingURL=getWxSignService.js.map