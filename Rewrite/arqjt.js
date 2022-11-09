/****************************************

项目功能：傲软全家桶 解锁VIP
下载地址：http://mtw.so/5twaH6
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/arqjt.js

[mitm] 

hostname = *.aoscdn.com

****************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);
chxm1023.data.is_activated = 1;
chxm1023.data.remain_days = 999999999;
chxm1023.data.expire_time = "2099-09-09 09:09:09";
chxm1023.data.expired_at = 4092600296;
chxm1023.data.license_type = "premium";
chxm1023.data.durations = 999999999;
chxm1023.data.vip_special = 1;


body = JSON.stringify(chxm1023);

$done({body});
