/*
[rewrite_local]
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/wsgj.js
[mitm] 
hostname = api-v3.speedtest.cn
*/

var chxm = JSON.parse($response.body); 
// 

chxm ={
  "code" : 0
  "data" : {
    "id" : "11641894",
    "integral" : "666666666",
    "phone" : "13900001023",
    "email" : null,
    "nickname" : "聪",
    "avatar" : "https://file2.speedtest.cn/avatar/011/68/49/34/CUFrcGqPso5lGSiSfIX7Whq16x4ejde2X5CvoVYd.jpeg",
    "phoneCity" : null,
    "vpnRegister" : "0",
    "loginCheck" : null,
    "phoneProvince" : null,
    "socialId" : "oGACExIzJUwafX_X6TCuRjwQNpuw",
    "disabled" : "0",
    "emailVerifiedAt" : null,
    "rememberToken" : null,
    "identified" : "0",
    "receiveSms" : "0",
    "createdAt" : "2022-07-30 01:44:25",
    "updatedAt" : "2022-08-09 15:01:49",
    "vipExpire" : "2099-09-09 09:09:09",
    "hashId" : "veqPdo9J0WxOBwQzNj60"
    "username" : "聪",
    "status" : "1",
    "isMajor" : "1",
    "inviteId" : "0",
    "profile" : {
      "location" : null,
      "address" : null,
      "website" : null,
      "introduction" : null,
      "bio" : null,
      "userId" : "11641894",
      "birthday" : null,
      "timezone" : null,
      "countryCode" : null,
      "provinceId" : null,
      "cityId" : null
    },
    "isVip" : 1,
    "winxinOpenid" : null,
    "gender" : null,
    "frozenIntegral" : "0",
    "deletedAt" : null,
    "balance" : 0,
    "password" : "",
    "inviteTime" : null,
    "udid" : null,
    "socialNickname" : "聪"
  },
  "msg" : "ok",
}
$done({body:JSON.stringify(chxm)});
