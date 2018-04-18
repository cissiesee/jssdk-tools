import httpRequest from "axios";

interface IObj {
    url: string;
    data?: any;
}

/**
 * @param data datadesc
 * @return {Promise<>} {
 *  ...
 * }
 */

export function getWxSignService(obj: IObj) {
    // const requestOption = {
    //     type: "post",
    //     dataType: "json",
    //     contentType: "application/json",
    //     data: obj.data
    // };
    return httpRequest({
        method: "post",
        url: obj.url,
        data: obj.data
    });
}