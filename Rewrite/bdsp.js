/****************************************

项目功能：布丁锁屏 解锁VIP
下载地址：http://mtw.so/6rFR6J
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************
 
[rewrite_local]

https?:\/\/screen-lock\.51wnl-cq\.com\/userApi\/saveUser url script-echo-response https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/bdsp.js

[mitm] 

hostname = screen-lock.51wnl-cq.com

****************************************/


var cuttlefish ={"warning":"仅供学习，禁止转载或售卖","tgchannel":"https://t.me/chxm1023","feedback":"chxm1023"}
var chxm1023 = {"returncode":"SUCCESS","errormsg":"","data":{"id":"chxm1023","nickName":"chxm1023","sign":"chxm1023","vipStatus":1,"endTime":2099,"exchangeCode":null,"expireDate":null}};
$done({body: JSON.stringify(chxm1023)});
