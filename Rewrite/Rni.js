/****************************************

项目功能：RNI 解锁高级会员
下载地址：https://t.cn/A6ouQhiE
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https:\/\/pro-status-service-prod\.azurewebsites\.net\/api\/item url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/Rni.js

[mitm] 

hostname=pro-status-service-prod.azurewebsites.net

****************************************/


var chxm1023 = JSON.parse($response.body);
chxm1023.FilmsProStatus = 1
chxm1023.AeroProStatus = 1
$done({body: JSON.stringify(chxm1023)})
