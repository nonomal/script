/****************************************

项目功能：京东比价-弹窗版本
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
Boxjs订阅：https://raw.githubusercontent.com/githubdulong/Script/master/boxjs.json

****************************************/



# Loon/Surge
http-response ^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) requires-body=1,script-path=https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/jd_price_lite.js, tag=京东比价-弹窗

# 圈x京东比价
^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/jd_price_lite.js


hostname = api.m.jd.com
