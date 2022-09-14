/*********************************************
*================UserScript==================*
***********************************************************解锁合集@chxm1023整理**************
**********************************************
*================UserScript==================*

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️



FileBall挂载阿里云操作步骤:
**********************************************
1.0挂载Aliyun[仅单个账户]
1.1添加Synology协议
1.2地址填 aliyun.example.com
1.3用户名随意
1.4密码填【refresh_token】Token获取地址(需要用阿里云盘扫描alist的二维码获得)[ https://alist-doc.nn.ci/docs/driver/aliyundrive ]
1.5目前阿里云盘仅支持单账户(多账户功能后续完善...)
1.6连接&Enjoy
1.7如需更换账户，请删除原aliyun列表，重新按照1.1-1.4步骤添加
**********************************************
2.0挂载Alist[可多个账户]
2.1添加Synology协议
2.2地址填 alist.example.com
2.3用户名填Alist地址，如 https://a.b.c
2.4密码随意
2.5按照2.1-2.4步骤可添加多个alist
2.6当存在多个alist列表，需要使用某个alsit，请【左滑】，点击【画笔】，点击右上角【连接】使用
2.7单alist使用时，无需2.6步骤
2.8连接&Enjoy
*********************************************/

[mitm]

hostname= buy.itunes.apple.com, *.aoscdn.com, apimboom2.globaldelight.net, api-weather.andy.works, www.duitang.com, api.revenuecat.com, spclient.wg.spotify.com, notability.com, user.ftmailbox.cn, *.wallpaperscraft.com, screen-lock.51wnl-cq.com, api.risingfalling.com, api.meiease.cn, pro-status-service-prod.azurewebsites.net, api-sub.meitu.com, server.yoyiapp.com, pan.baidu.com, ap*.intsig.net, mb3admin.com, rich.kuwo.cn, *.kwcdn.kuwo.cn, mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me, iosv2.cjapi.wufan88.com, api-v3.speedtest.cn, *.docer.wps.cn, vipapi.wps.cn, *account.wps.cn, *account.wps.com, app.yiyan.art, biz.caiyunapp.com, api.tidal.com, auth.tidal.com, api.revenuecat.com, dida365.com, *example.com, 



[rewrite_local]


# Panda widget解锁会员
#下载地址；http://mtw.so/6bZ0fl
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body pandavip.js



# Picsew解锁专业版
#下载地址；http://mtw.so/5txHCf
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontents.com/chxm1023/script/main/JB/Picsew.js



# 滴答清单 解锁VIP权限
# 下载地址：http://mtw.so/6c8i6U
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/ddqd.js



# FileBall 挂载阿里云盘@ddgksf2013
^https?:\/\/.*\.example\.com url script-analyze-echo-response https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Script/ali.js
# Fileball 解锁高级版
# 下载地址：http://mtw.so/5X5nGK
^https?:\/\/api\.revenuecat\.com\/v\d\/(subscribers/\$RCAnonymousID\%(\w)+|receipts)$ url echo-response text/Json echo-response https://raw.githubusercontents.com/chxm1023/QX/main/Scripts/Fileball.js



# Text Editor 解锁高级功能
# 下载地址：https://t.cn/A6JukiQb
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontents.com/I-am-R-E/QuantumultX/main/JavaScript/TextEditor.js



# Tidal Music 解锁HiFi Plus（美区下载）
# 下载地址：http://t.cn/A662gqIO
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontents.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontents.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js



# 彩云天气 解锁VIP权限
# 下载地址：http://mtw.so/6jpmu5
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body  https://raw.githubusercontents.com/hhse/Mul4hong/master/caiyun_svip.js



# 一言 解锁Vip权限
# 下载地址：http://mtw.so/5B2iyp
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js



# WPS Office 解锁部分功能（国区）
# 下载地址：http://mtw.so/5B2iyf
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users url script-response-body https://raw.githubusercontents.com/NobyDa/Script/master/Surge/JS/Wps.js
# > WPS解锁稻壳会员
# 下载地址：http://mtw.so/5B2iyf
;^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontents.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
;^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontents.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js



# 网速管家 解锁Vip权限
# 下载地址：http://mtw.so/5XqaXq
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontents.com/chxm1023/script/main/JB/wsgj.js



# 悟饭 解锁Vip权限
# 下载地址：http://mtw.so/5Io7UC
^http:\/\/iosv2\.cjapi\.wufan88\.com\/user\/.+ url script-response-body https://gjds.vip/QX/pojie/wf.js



# 酷我音乐系列
# 下载地址：http://mtw.so/5tlGDo
# 酷我音乐_AdBlock
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url reject
# 酷我听书_Blockad
https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url reject-dict
# 酷我听书_Blockad
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p\?op=get_advertright url reject-dict
# 酷我音乐_解锁会员
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontents.com/nameking77/Qx/main/rewrite/kw.js
# 酷我音乐_添加已购音乐
^https?:\/\/.*\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2



# Emby 解锁播放权限
# 下载地址：http://mtw.so/5tw5vk
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://subweb.s3.fr-par.scw.cloud/Script/embycrack.js



# 扫描全能王 解锁黄金会员权限
# 下载地址：http://mtw.so/5tlD88
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontents.com/githubdulong/Script/master/CamScanner.js



# 百度网盘 解锁部分SVIP功能
# 下载地址：http://mtw.so/5IhM60
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bdcloud.js
# 百度网盘 解锁在线视频倍率/清晰度
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontents.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js



# Fimo-复古胶片相机 解锁Vip权限
# 下载地址：http://mtw.so/5IujwE
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/user$ url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/fimo.js



# Wink-像修图一样修视频 解锁Vip权限
# 下载地址：http://mtw.so/64mWq1
https?:\/\/api-sub\.meitu\.com\/v\d\/user\/vip_info\.json url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/wink.js



# RNI 解锁高级会员
# 下载地址：http://mtw.so/6rFM99
https://pro-status-service-prod.azurewebsites.net/api/item url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/rf.js



# 图图记账 解锁Vip权限
# 下载地址：http://mtw.so/6jpmAx
https?:\/\/api\.magictouch\.design\/user\/user\/getUserByDevice url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/tutujizhang.js



# Picsart美易图片视频编辑器 解锁Vip权限
# 下载地址：http://mtw.so/5B2iDf
^https?:\/\/api\.meiease\.cn\/shop\/subscription\/validate url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/picsart.js



# 起伏-睡眠/冥想/白噪音 解锁Vip权限
# 下载地址：http://mtw.so/5Iuov2
https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/qifu.js



# 布丁锁屏 解锁Vip权限
# 下载地址：http://mtw.so/6rFR6J
https?:\/\/screen-lock\.51wnl-cq\.com\/userApi\/saveUser url script-echo-response https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/budingsuoping.js



# Wallcraft-动态 壁纸解锁永久专业版
# 下载地址：http://t.cn/A6iO7Eht
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontents.com/yqc007/QuantumultX/master/WallCraftFProCrack.js



# FT中文网 解锁Vip权限解
# 下载地址：http://mtw.so/6rFR8b
^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/ftchinese.js



# Symbolab 解锁订阅（需要登录）
# 下载地址：http://mtw.so/5tc7Bk
^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/symbolab.js



# Nicegram 解锁Vip权限
# 下载地址：http://mtw.so/5Iuohu
https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/nicegram_body.js



# Lake 解锁Vip权限
# 下载地址：http://mtw.so/5WQR0O
https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/lakepro.js



# VPN-unlimited 解锁订阅（非国区）
# 下载地址：http://mtw.so/6rFRbJ
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/supervpnpro.js



# 夏时VPN 解锁Vip权限
# 下载地址：http://mtw.so/64MPGN
^https?:\/\/hotspot-unlimited\.com\/addressx2\/ url response-body vip":"1 response-body vip":"0



# Notability 解锁订阅
# 下载地址：http://mtw.so/6bSOy0
https://notability.com/subscriptions url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/notability.js



# Spotify Pro 解锁部分功能，音质不能设置超高
# 下载地址：http://mtw.so/6qFvqC
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontents.com/app2smile/rules/master/js/spotify-proto.js



# Scanner Pro 解锁高级Vip权限
# 下载地址：http://mtw.so/6bSOyO
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-response-body https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-response-body https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js



# 堆糖 解锁Vip权限
# 下载地址：http://mtw.so/5Q0BHt
^https?:\/\/www\.duitang\.com\/napi\/vienna\/graphic\/template url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/duitangpro.js



# Not Boring[天气、习惯、计算器、时间] 解锁VIP权限
# 下载地址：http://mtw.so/5WQRny
^https?:\/\/api-weather\.andy\.works\/v\d\/\w{18}$ url script-response-body https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/notboring.js



# boom 解锁Vip权限
# 下载地址：http://mtw.so/5WQRnS
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url script-response-body https://githubs.com/ddgksf2013/Cuttlefish/raw/master/Crack/boom.js



# 傲软抠图 解锁Vip权限
# 下载地址：http://mtw.so/5twaH6
https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontents.com/ddgksf2013/Cuttlefish/master/Crack/apowersoft.js
