[rewrite_local]

# 京东Cookie 登录https://bean.m.jd.com/bean/signIndex.action 登录后点击右下角“我的”获取Cookie
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request-header https://raw.githubusercontent.com/chxm1023/script/main/Task/JD/JD_DailyBonus.js

[mitm] 
hostname = ms.jr.jd.com, me-api.jd.com, api.m.jd.com
