/*


[rewrite_local]
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/wsgj.js

[mitm] 
hostname = api-v3.speedtest.cn



*/



 var chxm = JSON.parse($response.body); 
// 

chxm ={
  "msg" : "ok",
  "data" : {
    "updatedAt" : "2022-08-09 15:01:49",
    "id" : "11684934",
    "integral" : "666666666",
    "phoneCity" : null,
    "vpnRegister" : "0",
    "loginCheck" : null,
    "phoneProvince" : null,
    "hashId" : "WPNv2bRO61bqQ9Vedz5Y",
    "profile" : {
      "location" : null,
      "address" : null,
      "website" : null,
      "introduction" : null,
      "bio" : null,
      "userId" : "11684934",
      "birthday" : null,
      "timezone" : null,
      "countryCode" : null,
      "provinceId" : null,
      "cityId" : null
    },
    "nickname" : "聪",
    "disabled" : "0",
    "emailVerifiedAt" : null,
    "rememberToken" : null,
    "email" : null,
    "iPhone" : "13900001023"
    "identified" : "0",
    "receiveSms" : "0",
    "createdAt" : "2022-07-30 01:44:25",
    "vipExpire" : "2099-09-09 09:09:09",
    "username" : "聪1023",
    "avatar" : "https://file2.speedtest.cn/avatar/011/68/49/34/CUFrcGqPso5lGSiSfIX7Whq16x4ejde2X5CvoVYd.jpeg",
    "status" : "1",
    "isMajor" : "1",
    "inviteId" : "0",
    "isVip" : 1,
    "winxinOpenid" : null,
    "gender" : null,
    "frozenIntegral" : "0",
    "socialNickname" : "聪",
    "deletedAt" : null,
    "balance" : 0,
    "socialId" : "oGACExPylvydWhm2SJHAUfHV7geE",
    "password" : "",
    "phone" : null,
    "inviteTime" : null,
    "udid" : null
  },
  "code" : 0
}

$done({body:JSON.stringify(chxm)});
