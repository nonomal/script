


[mitm]

hostname = oto.yunw2.cn, q12.tuanyougou.com,qadx.qinlinad.com,wx.wxqqurl.cn

[rewrite_local]


# iOS果粉 弹窗
^https:\/\/wx\.wxqqurl\.cn\/wp-json\/watch-life-net\/v1\/options url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Advertising/xcx.js

# 亲邻开门+去广告
https://qadx.qinlinad.com url reject

# 海绵去水印，q12.tuanyougou.com
https://q12.tuanyougou.com/advert/* url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Advertising/xcx.js

# 步走赚，oto.yunw2.cn
https://oto.yunw2.cn/app/index.php* url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Advertising/xcx.js
