/*


[rewrite_local]
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/wsgj.js

[mitm] 
hostname = api-v3.speedtest.cn



*/



var chxm = JSON.parse($response.body); 
// 

chxm ={
  "code": 0,
  "data": {
    "id": "11641894",
    "username": "chxm1023",
    "email": null,
    "phone": "15305051023",
    "nickname": "chxm1023",
    "avatar": "https://file2.speedtest.cn/avatar/011/68/49/34/CUFrcGqPso5lGSiSfIX7Whq16x4ejde2X5CvoVYd.jpeg",
    "gender": null,
    "identified": "0",
    "disabled": "0",
    "password": "",
    "balance": 0,
    "integral": "123456789",
    "status": "1",
    "udid": null,
    "phoneProvince": null,
    "phoneCity": null,
    "vpnRegister": "0",
    "frozenIntegral": "0",
    "inviteId": "0",
    "winxinOpenid": null,
    "rememberToken": null,
    "loginCheck": null,
    "emailVerifiedAt": null,
    "isMajor": "1",
    "receiveSms": "0",
    "createdAt": "2022-06-22 20:53:20",
    "updatedAt": "2022-06-23 02:16:56",
    "deletedAt": null,
    "inviteTime": null,
    "vipExpire": "2099-09-09 21:21:21",
    "hashId": "veqPdo9J0WxOBwQzNj60",
    "profile": {
      "birthday": null,
      "location": null,
      "address": null,
      "website": null,
      "timezone": null,
      "introduction": null,
      "bio": null,
      "userId": "11641894",
      "countryCode": null,
      "provinceId": null,
      "cityId": null
    },
    "isVip": 1,
    "socialId": "oGACExIzJUwafX_X6TCuRjwQNpuw",
    "socialNickname": "chxm1023"
  },
  "msg": "ok"
}

$done({body:JSON.stringify(chxm)});
