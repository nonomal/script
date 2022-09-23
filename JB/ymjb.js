//////////////////////////////////////////////
////////////羊毛合集，@chxm1023整理/////////////
/////////////////////////////////////////////

[mitm]

hostname= apph5.manmanbuy.com, open.meituan.com, game.xiaojukeji.com,api.kuaisho*.com,gjgrowthoper.58.com, bwa.feierlaiedu.com






[rewrite_local]


# 健步有礼获取Ck hostname= bwa.feierlaiedu.com
https://bwa.feierlaiedu.com/api/v1/bbg/taskRecord/queryUserInfo url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/jzyl.js




# 赶集直招 hostname= gjgrowthoper.58.com
https://gjgrowthoper.58.com/user/userinfo url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/gjzz.js



# 快手 hostname= api.kuaisho*.com
appsupport/yoda/biz/info url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/ks.js
ksapp/client/package/renew url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/ks.js



# 快手极速版 hostname= api.kuaisho*.com
appsupport/yoda/biz/info url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/ksjsb_v2.js
ksapp/client/package/renew url script-request-header https://raw.githubusercontents.com/chxm1023/QX/main/Task/ksjsb_v2.js



# 滴滴果园 hostname= game.xiaojukeji.com
https://game.xiaojukeji.com/api/game/plant/enter url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/ddgy.js



# 美团 hostname= open.meituan.com
https://open.meituan.com/user/v1/info url script-request-body https://raw.githubusercontents.com/chxm1023/QX/main/Task/meituan.js



# 慢慢买获取Cookie hostname= apph5.manmanbuy.com
^https?:\/\/apph5\.manmanbuy\.com\/taolijin\/(login.aspx|logserver.aspx) url script-request-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/manmanbuy/manmanbuy_checkin.js


