const url = new URL(window.location.href);
const url_getParams = new URLSearchParams(url.search.substring(1));
let iframe_params = "";

url_getParams.forEach((value, key) => {
    iframe_params += `${ key }="${ value }" `;
});

$("#player").append(`<div id="yohoho" style="width:1350px;height:370px;border:0;margin:0;padding:0;overflow:hidden;position:relative" ${ iframe_params }></div>`);