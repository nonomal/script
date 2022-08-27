[mitm]
hostname = oto.yunw2.cn, q12.tuanyougou.com, www.bbfx.ltd,qadx.qinlinad.com


[rewrite_local]
# 亲邻开门+去广告
https://qadx.qinlinad.com url reject

# 科技窝，www.bbfx.ltd
https://www.bbfx.ltd/wp-json/watch-life-net/v1 url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/xcx.js

# 海绵去水印，q12.tuanyougou.com
https://q12.tuanyougou.com/advert/* url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/xcx.js

# 步走赚，oto.yunw2.cn
https://oto.yunw2.cn/app/index.php* url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/xcx.js

