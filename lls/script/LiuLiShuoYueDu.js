/*
脚本功能：解锁流利说·阅读会员、解锁阅读权限、解锁音频权限等

更新时间：2022.07.27
支持版本：商店版本 
下载地址：https://apps.apple.com/app/id1435478035

使用声明：⚠️⚠️⚠️此脚本仅供学习与交流,禁止转载与贩卖,需在24小时内从设备中删除！⚠️⚠️⚠️
*/

// 获取响应的 body 和请求的 url
var responseBody = $response['body'];
var requestUrl = $request['url'];

// 如果请求的 url 包含 '/api/v2/member/subscription'
if (requestUrl.indexOf('/api/v2/member/subscription') !== -1) {
    var responseObj1 = {};
    responseObj1['expiredAt'] = 2000000000;
    responseObj1['remainDays'] = 999;
    responseObj1['active'] = true;
    responseObj1['startedAt'] = 1649045631;
    var jsonResponse1 = responseObj1;
    responseBody = JSON.stringify(jsonResponse1);
    var modifiedResponse1 = {};
    modifiedResponse1['body'] = responseBody;
    $done(modifiedResponse1);
} else if (requestUrl.indexOf('/api/v2/user_goods_subscriptions/overall') !== -1) {
    var responseObj2 = {};
    responseObj2['startedAt'] = 1649045376;
    responseObj2['category'] = 4;
    responseObj2['status'] = 2;
    responseObj2['expiredAt'] = 1649045631;
    responseObj2['goodsTitle'] = 'member';
    responseObj2['remainDays'] = 999;
    responseObj2['goodsUid'] = 'XnV1EW';
    responseObj2['firstStartedAt'] = 2000000000;
    var jsonResponse2 = {};
    jsonResponse2['items'] = [responseObj2];
    responseBody = JSON.stringify(jsonResponse2);
    var modifiedResponse2 = {};
    modifiedResponse2['body'] = responseBody;
    $done(modifiedResponse2);
}

// 如果不符合上述条件，直接结束请求
$done();