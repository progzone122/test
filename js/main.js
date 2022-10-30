const url = new URL(window.location.href);
const getParams = new URLSearchParams(url.search.substring(1));
console.log(getParams);

if(getParams.get("data_title") !== undefined){
    $("#player").append(`<div id="yohoho" style="width:1350px;height:370px;border:0;margin:0;padding:0;overflow:hidden;position:relative" data-title="${ getParams.get("data_title") }"></div>`);
}