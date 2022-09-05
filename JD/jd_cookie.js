[rewrite_local]

# 京东Cookie 登录https://bean.m.jd.com/bean/signIndex.action 登录后点击右下角“我的”获取Cookie
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 获取钢镚签到body
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/appSign\? url script-request-body https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js



# 获取京喜Cookie

# 1，打开京喜农场，手动完成任意任务，必须完成任务领到水滴，提示获取cookie成功
^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js

# 2，打开京喜工厂，收取电力，提示获取cookie成功
^https\:\/\/m\.jingxi\.com\/dreamfactory\/generator\/CollectCurrentElectricity url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js

# 3，打开京喜财富岛，手动成功提现一次，提示获取cookie成功
^https\:\/\/m\.jingxi\.com\/jxcfd\/consume\/CashOut url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js



[mitm] 
hostname = ms.jr.jd.com, me-api.jd.com, api.m.jd.com
