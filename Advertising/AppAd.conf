[rewrite_local]

# 去除555影视广告模块 hostname = vip7.fzwdyy.cn
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getAdvertInfo url reject

# YouTube去广告
ctier=[A-Z] url 302 ctier=A
^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url reject-200

# 京东极速版去开屏-App内广告
^https:\/\/img11.360buyimg.com\/dl\/jfs\/t1\/195304\/29\/12317\/268480\/60e6fd21E02a8fb2a\/ url reject-200
https://api.m.jd.com/client.action\?functionId=lite_advertising url reject

# 京东健康
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/[0-9]{6}\/[0-9]{2}\/[0-9]{5}\/[0-9]{6}\/.*.jpg url reject-200
^https?:\/\/m\.360buyimg\.com\/babel\/？jfs\/t1\/180291\/5\/23800\/294871\/625f5da2E13ac0ba3\/230238c767c61b6d\*.jpg url reject

[mitm] 
hostname = vip7.fzwdyy.cn, *.360buyimg.com, api.m.jd.com
