[rewrite_local]
#去除555影视广告模块 hostname = vip7.fzwdyy.cn
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getAdvertInfo url reject

[mitm] 
hostname = vip7.fzwdyy.cn
